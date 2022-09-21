import { getImageDimensionsFromFile } from 'utils/file'

export const isValidFileType = (accept: string, file: File) => {
  const acceptTypes = accept
    .split(',')
    .map(type => type.trim().replace('.', ''))

  const fileType = file.type.replace('image/', '')

  const fileTypeIndex = acceptTypes.indexOf(fileType)

  if (fileTypeIndex === -1) return false

  return true
}

export const isValidDate = (date: string) => !isNaN(new Date(date).getTime())

export const isValidImageDimensions = async (
  file: File,
  width: number,
  height: number
) => {
  const dimensions = await getImageDimensionsFromFile(file)
  return dimensions.width === width && dimensions.height === height
}

const BLACKLIST: Array<string> = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999'
]

const verifierDigit = (digits: string): number => {
  let index = 2
  const reverse = digits.split('').reduce((buffer, number) => {
    return [parseInt(number, 10)].concat(buffer)
  }, [] as Array<number>)

  const sum: number = reverse.reduce((buffer, number) => {
    buffer += number * index
    index = index === 9 ? 2 : index + 1
    return buffer
  }, 0)

  const mod: number = sum % 11
  return mod < 2 ? 0 : 11 - mod
}

export const isValidCnpj = (number: string): boolean => {
  const stripped: string = number.replace(/[^\d]/g, '')

  if (stripped.length !== 14) {
    return false
  }

  if (BLACKLIST.includes(stripped)) {
    return false
  }

  let numbers: string = stripped.substring(0, 12)
  numbers += verifierDigit(numbers)
  numbers += verifierDigit(numbers)

  return numbers.substring(-2) === stripped.substring(-2)
}

export const isValidCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

  const novoCpf = cpf.split('').map(el => +el)

  const rest = (count: number) =>
    ((novoCpf
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10
  return rest(10) === novoCpf[9] && rest(11) === novoCpf[10]
}

export const generateCnpj = (): string => {
  let numbers = ''

  for (let i = 0; i < 12; i += 1) {
    numbers += Math.floor(Math.random() * 9)
  }

  numbers += verifierDigit(numbers)
  numbers += verifierDigit(numbers)

  return numbers
}
