import { removeEmptyAttributes, removeKeyPrefix, addKeyPrefix } from '../object'

describe('Utils de object', () => {
  test('removeEmptyAttributes: deve remover os atributos "" do objeto', () => {
    const objectWithEmptyString = { a: '', b: 'teste' }

    expect(removeEmptyAttributes(objectWithEmptyString)).toEqual({ b: 'teste' })
  })

  test('removeEmptyAttributes: deve remover atributos null, undefined e NaN', () => {
    const objectWithInvalidData = { a: null, b: undefined, c: NaN, d: 'ok' }

    expect(removeEmptyAttributes(objectWithInvalidData)).toEqual({ d: 'ok' })
  })

  test('removeEmptyAttributes: deve remover arrays vazios', () => {
    const objectWithEmptyArray = { a: [], b: ['ok'], c: 'ok' }

    expect(removeEmptyAttributes(objectWithEmptyArray)).toEqual({
      b: ['ok'],
      c: 'ok'
    })
  })

  test('removeEmptyAttributes: deve remover objetos vazios', () => {
    const objectWithEmptyObject = { a: { teste: '123' }, b: {}, c: 'ok' }

    expect(removeEmptyAttributes(objectWithEmptyObject)).toEqual({
      a: { teste: '123' },
      c: 'ok'
    })
  })

  test('addKeyPrefix: não deveria gerar exceção quando o objeto é undefined', () => {
    const keys = addKeyPrefix(undefined, 'x')
    expect(keys).toStrictEqual({})
  })

  test('removeKeyPrefix: não deveria gerar exceção quando o objeto é undefined', () => {
    const keys = removeKeyPrefix(undefined, 'x')
    expect(keys).toStrictEqual({})
  })

  test('addKeyPrefix: deveria adicionar o prefixo corretamente', () => {
    const keys = addKeyPrefix({ nome: 'MyMocker' }, 'x')
    expect(keys).toStrictEqual({ xnome: 'MyMocker' })
  })

  test('removeKeyPrefix: deveria remover o prefixo corretamente', () => {
    const keys = removeKeyPrefix({ xnome: 'MyMocker' }, 'x', false)
    expect(keys).toStrictEqual({ nome: 'MyMocker' })
  })
})
