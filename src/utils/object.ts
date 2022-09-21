export const byString = function (o: any, s: string) {
  try {
    s = s.replace(/\[(\w+)\]/g, '.$1')
    s = s.replace(/^\./, '')
    const a = s.split('.')
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i]
      if (k in o) {
        o = o[k]
      } else {
        return
      }
    }
    return o
  } catch (error) {}
}

export const addKeyPrefix = (objeto: any, prefix: string) => {
  return (objeto ? Object.keys(objeto) : []).reduce((acc, key) => {
    return { ...acc, [`${prefix}${key}`]: objeto[key] }
  }, {})
}

export const removeKeyPrefix = (
  objeto: any,
  prefix: string,
  keyIsNumber = true
) => {
  const prefixLenght = prefix.length

  return (objeto ? Object.keys(objeto) : []).reduce((acc, key) => {
    if (keyIsNumber)
      return { ...acc, [Number(key.substring(prefixLenght))]: objeto[key] }

    return { ...acc, [key.substring(prefixLenght)]: objeto[key] }
  }, {})
}

export function removeEmptyAttributes<T = any>(object: T): T {
  const newObject = { ...object }
  const keys = Object.keys(newObject)
  const toRemove = [null, undefined, NaN, '']

  keys.forEach(key => {
    const value = newObject[key as keyof T] as any
    const isEmptyArray = Array.isArray(value) && value.length === 0
    const isEmptyObject =
      !toRemove.includes(value) &&
      !Array.isArray(value) &&
      typeof value === 'object' &&
      Object.keys(value).length === 0

    if (toRemove.includes(value) || isEmptyArray || isEmptyObject) {
      delete newObject[key as keyof T]
    }
  })

  return newObject
}
