/* eslint-disable no-self-compare */

function isValueObject(maybeValue: any) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  )
}

export function is(valueA: any, valueB: any) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true
  }
  if (!valueA || !valueB) {
    return false
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf()
    valueB = valueB.valueOf()
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true
    }
    if (!valueA || !valueB) {
      return false
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  )
}

export function arrayEquals(previous: any[], next: any[]) {
  if (previous.length !== next.length) return false

  const different = previous.some(
    (item, index) => !propsEquals(item, next[index])
  )

  return !different
}

export function propsEquals<T extends object>(previous: T, next: T) {
  if (previous == null) return false
  if (previous === next) return true

  for (const key in next) {
    const inNext = Object.prototype.hasOwnProperty.call(next, key)
    const inPrevious = Object.prototype.hasOwnProperty.call(next, key)
    if (!inNext || !inPrevious) return false
    if (!is(previous[key], next[key])) return false
  }
  return true
}
