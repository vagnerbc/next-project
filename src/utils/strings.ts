export const splice = (str: string, index: number, content: string) => {
  const head = str.slice(0, index)
  const tail = str.slice(index, str.length)
  return `${head}${content}${tail}`
}

export const isJsonString = (value: any) => {
  try {
    if (
      value === null ||
      typeof value === 'number' ||
      (typeof Number(value) === 'number' && !Number.isNaN(Number(value)))
    ) {
      throw new Error()
    } else {
      JSON.parse(value)
    }
  } catch (e) {
    return false
  }
  return true
}

export const strToNumeric = (value: string) =>
  Number(`${value}`.replace(/,/g, '.'))

export const isCpfOrCnpj = (value: string) => {
  const hasLetters = /\p{L}/u.test(value)

  if (hasLetters) return false

  const numberQuantity = onlyNumbers(value).length

  return [11, 14].includes(numberQuantity)
}

export const onlyNumbers = (value: string) => {
  return value.replace(/[^0-9]/g, '')
}

export const removeEmptyLinesUpload = (arr: string[][]): string[][] => {
  return arr.filter(value => value.some(v => v.trim()))
}

export const removeSpecialCharacters = (arr: string[][]): string[][] => {
  return arr.map(value => value.map(v => onlyNumbers(v)))
}

export const strToLowerCase = (value: string) => value.trim().toLowerCase()
