import { validate } from '../regex-validation'

describe('Utils de regex validation', () => {
  describe('Ao validar o regex de tipo "ONLY_NUMBERS"', () => {
    const type = 'ONLY_NUMBERS'
    test('deve retornar inválido quando passado um texto que NÃO contenha apenas números', async () => {
      const value = '12a34b'

      expect(validate({ value, type })).toEqual({ text: value, isValid: false })
    })

    test('deve retornar válido quando passado um texto que contenha apenas números ou "." ou ","', async () => {
      const value = '1234567890,10'

      expect(validate({ value, type })).toEqual({
        text: value.replace(/,+/g, '.'),
        isValid: true
      })
    })
  })

  describe('Ao validar o regex de tipo "PAYMENT_METHOD"', () => {
    const type = 'PAYMENT_METHOD'
    test('deve retornar válido quando passado um texto que contenha apenas números e "/"', async () => {
      const value = '0/30/60/90'

      expect(validate({ value, type })).toEqual({
        text: value,
        isValid: true
      })
    })

    test('deve retornar inválido quando passado um texto que NÃO contenha apenas números e "/"', async () => {
      const value = '123-4$/A'

      expect(validate({ value, type })).toEqual({ text: value, isValid: false })
    })

    test('deve retornar inválido quando passado um texto que SE inicie com qualquer caracter que não seja um número', async () => {
      const value = '/30/60/90'
      const value2 = '=12/40'

      expect(validate({ value, type })).toEqual({ text: value, isValid: false })
      expect(validate({ value: value2, type })).toEqual({
        text: value2,
        isValid: false
      })
    })
  })
})
