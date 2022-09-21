import {
  splice,
  isJsonString,
  strToNumeric,
  isCpfOrCnpj,
  onlyNumbers,
  removeEmptyLinesUpload
} from '../strings'

describe('Utils de string', () => {
  test('deve fazer o splice de strings', async () => {
    const string = 'Hello World'

    expect(splice(string, 4, ' ')).toEqual('Hell o World')
    expect(splice(string, 0, 'Hi')).toEqual('HiHello World')
  })

  test('deve verificar se a string é um json stringfy', async () => {
    const jsonData = '{"name": "John", "age": 30}'
    const notJsonData = 'hello world'
    const numberData = 123
    const nullData = null

    expect(isJsonString(jsonData)).toBeTruthy()
    expect(isJsonString(notJsonData)).toBeFalsy()
    expect(isJsonString(numberData)).toBeFalsy()
    expect(isJsonString(nullData)).toBeFalsy()
  })

  test('strToInt: deve retornar um número válido e substituir ponto por vírgula caso possua', () => {
    const validStr = '4,80'
    const validStr2 = '480'

    expect(strToNumeric(validStr)).toEqual(4.8)
    expect(strToNumeric(validStr2)).toEqual(480)
  })

  describe('isCpfOrCnpj tests', () => {
    test('deve retornar false se o texto recebido contiver letras', () => {
      const text1 = '111111111ab12'
      const text2 = '80867174000195b12'
      const text3 = '80.867.174/0001-95abc'

      expect(isCpfOrCnpj(text1)).toBe(false)
      expect(isCpfOrCnpj(text2)).toBe(false)
      expect(isCpfOrCnpj(text3)).toBe(false)
    })

    test('deve retornar false se o texto recebido contiver uma quantidade de números diferente de 11 ou 14 ', () => {
      const text1 = '038.505.230'
      const text2 = '80.867.174/0001-'
      const text3 = '808671195'

      expect(isCpfOrCnpj(text1)).toBe(false)
      expect(isCpfOrCnpj(text2)).toBe(false)
      expect(isCpfOrCnpj(text3)).toBe(false)
    })

    test('deve retornar true se o texto recebido não contiver letras e contiver 11 ou 14 dígitos numéricos ', () => {
      const text1 = '80.867.174/0001-95'
      const text2 = '80867174000195'
      const text3 = '788.787.060-78'
      const text4 = '78878706078'

      expect(isCpfOrCnpj(text1)).toBe(true)
      expect(isCpfOrCnpj(text2)).toBe(true)
      expect(isCpfOrCnpj(text3)).toBe(true)
      expect(isCpfOrCnpj(text4)).toBe(true)
    })
  })

  describe('onlyNumbers tests', () => {
    test('deve retornar apenas os dígitos numéricos contidos no texto', () => {
      const text1 = '111111111ab12'
      const text2 = '80867174000195b12'
      const text3 = '80.867.174/0001-95abc'
      const text4 = 'AdlsD#$%-'

      expect(onlyNumbers(text1)).toBe('11111111112')
      expect(onlyNumbers(text2)).toBe('8086717400019512')
      expect(onlyNumbers(text3)).toBe('80867174000195')
      expect(onlyNumbers(text4)).toBe('')
    })
  })

  describe('removeEmptyLinesUpload tests', () => {
    test('deve retornar apenas as linhas não vazias', () => {
      const file1 = [[], ['linha', 'certa'], ['   ', ' ', '      ']]
      const file2 = [[], ['linha', 'certa', '   ', ''], ['   ', ' ', '      ']]

      expect(removeEmptyLinesUpload(file1).length).toBe(1)
      expect(removeEmptyLinesUpload(file1)[0].length).toBe(2)
      expect(removeEmptyLinesUpload(file1)[0][0]).toBe('linha')
      expect(removeEmptyLinesUpload(file2).length).toBe(1)
      expect(removeEmptyLinesUpload(file2)[0].length).toBe(4)
      expect(removeEmptyLinesUpload(file2)[0][0]).toBe('linha')
      expect(
        removeEmptyLinesUpload(file2)[0].some(value => value === '   ')
      ).toBe(true)
    })
  })
})
