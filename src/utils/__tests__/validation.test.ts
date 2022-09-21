import { getImageMock } from 'jest/utils/mock'

import {
  isValidFileType,
  isValidDate,
  isValidImageDimensions,
  isValidCnpj,
  generateCnpj,
  isValidCPF
} from '../validation'

describe('Testes das funções de validação', () => {
  const getIsValidFileTypeResult = (filename: string, type: string) => {
    const file = new File([], filename, { type: type })
    const accept = '.csv, .png'

    return isValidFileType(accept, file)
  }

  test('Deve validar corretamente que um arquivo possui um tipo válido', () => {
    const isValido = getIsValidFileTypeResult('file.csv', 'csv')

    expect(isValido).toBeTruthy()
  })

  test('Deve retornar true caso o tipo do arquivo seja image/* e o accept seja somente o .*', () => {
    const isValido = getIsValidFileTypeResult('file.png', 'image/png')

    expect(isValido).toBeTruthy()
  })

  test('Deve retornar false caso o tipo do arquivo não seja válido', () => {
    const isValido = getIsValidFileTypeResult('file.jpeg', 'image/jpeg')

    expect(isValido).toBeFalsy()
  })

  test('Deve retornar true caso a data seja válida', () => {
    const validDate1 = '2022-05-06T08:10'
    const validDate2 = '1702-05-06'

    expect(isValidDate(validDate1)).toBeTruthy()
    expect(isValidDate(validDate2)).toBeTruthy()
  })

  test('Deve retornar false caso a data seja inválida', () => {
    const invalidDate1 = '0000-05-00'
    const invalidDate2 = '2022-00-06'
    const invalidDate3 = '0022-05-06TINVALIDA'

    expect(isValidDate(invalidDate1)).toBeFalsy()
    expect(isValidDate(invalidDate2)).toBeFalsy()
    expect(isValidDate(invalidDate3)).toBeFalsy()
  })

  test('Deve retornar true caso as dimensões da imagem forem válidas', async () => {
    const imageFile = getImageMock(200, 200)

    const isValido = await isValidImageDimensions(imageFile, 200, 200)

    expect(isValido).toBeTruthy()
  })

  test('Deve retornar false caso as dimensões da imagem não forem válidas', async () => {
    const imageFile = getImageMock(100, 100)

    const isValido = await isValidImageDimensions(imageFile, 200, 200)

    expect(isValido).toBeFalsy()
  })

  test('Deve retornar false caso o cnpj não for valido', async () => {
    const cnpjMock1 = '00000000000000'
    const cnpjMock2 = '970949440001'
    const cnpjMock3 = '97094944000100'

    const isValido1 = isValidCnpj(cnpjMock1)
    const isValido2 = isValidCnpj(cnpjMock2)
    const isValido3 = isValidCnpj(cnpjMock3)

    expect(isValido1).toBeFalsy()
    expect(isValido2).toBeFalsy()
    expect(isValido3).toBeFalsy()
  })

  test('Deve retornar true caso o cnpj for valido', async () => {
    const cnpjMock = '97094944000107'

    const isValido = isValidCnpj(cnpjMock)

    expect(isValido).toBeTruthy()
  })

  test('Deve gerar um cnpj valido', async () => {
    const cnpjMock = generateCnpj()

    const isValido = isValidCnpj(cnpjMock)

    expect(isValido).toBeTruthy()
  })

  test('Deve gerar um cpf válido', async () => {
    const cpfMock = '33269787073'

    const isValido = isValidCPF(cpfMock)

    expect(isValido).toBeTruthy()
  })

  test('Deve gerar um cpf inválido', async () => {
    const cpfMock = '00000000000'

    const isValido = isValidCPF(cpfMock)

    expect(isValido).toBeFalsy()
  })
})
