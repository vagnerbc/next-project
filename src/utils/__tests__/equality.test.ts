import { arrayEquals, is, propsEquals } from '../equality'
function NumberType(this: any, n: any) {
  this.number = n
}

NumberType.prototype.valueOf = function () {
  return this.number + 1
}

NumberType.prototype.equals = function (n: any) {
  return this.number + 1 === n - 1
}

NumberType.prototype.hashCode = function () {
  return this.number.valueOf()
}
function NumberType2(this: any, n: any) {
  this.number = n
}

NumberType2.prototype.valueOf = function () {
  return new (NumberType as any)(this.number)
}

describe('Testes do utilitário de equality', () => {
  test('testes propEquals', () => {
    const obj1 = {
      val1: 'val1',
      val2: 'val2'
    }
    const sameValues = {
      val1: 'val1',
      val2: 'val2'
    }
    const differentValues = {
      val1: 'val5',
      val2: 'val6'
    }
    const differentProperties = {}
    const obj1Pointer = obj1
    expect(propsEquals(obj1, sameValues)).toBeTruthy()
    expect(propsEquals(obj1, obj1Pointer)).toBeTruthy()
    expect(propsEquals(obj1, differentValues)).toBeFalsy()
    expect(propsEquals(differentProperties as any, obj1 as any)).toBeFalsy()
    expect(
      propsEquals(null as unknown as object, null as unknown as object)
    ).toBeFalsy()
  })

  test('testes is', () => {
    const num1 = 1
    const num2 = 2
    const valNaN = NaN

    const obj1 = new (NumberType as any)(2)
    const objNaN = new (NumberType as any)(NaN)
    const objNaN2 = new (NumberType as any)(NaN)
    const classe2 = new (NumberType2 as any)(1)
    const classe22 = new (NumberType2 as any)(2)

    expect(is(num1, num1)).toBeTruthy()
    expect(is(valNaN, valNaN)).toBeTruthy()
    expect(is(num1, num2)).toBeFalsy()
    expect(is(num1, null)).toBeFalsy()

    expect(is(objNaN, objNaN2)).toBeTruthy()

    expect(is(objNaN, obj1)).toBeFalsy()
    expect(is(obj1, objNaN)).toBeFalsy()

    expect(is(classe2, classe22)).toBeTruthy()
  })

  test('testes arrayEquals', () => {
    const array1 = [1, 2, 3]
    const array2 = [1, 2]
    const array3 = [1, 2]
    const array4 = [{ nome: 'teste', idade: 20 }, { cidade: 'teste' }]
    const array5 = [{ nome: 'teste', idade: 20 }, { cidade: 'teste' }]

    expect(arrayEquals(array1, array2)).toBeFalsy()
    expect(arrayEquals(array2, array3)).toBeTruthy()
    expect(arrayEquals(array4, array5)).toBeTruthy()
  })
})
