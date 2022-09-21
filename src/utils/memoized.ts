import { is } from './equality'

type MemoOptions = {
  equals: (first: unknown, second: unknown) => boolean
}

const stdOptions: MemoOptions = { equals: is }

export function memoMethod(options: MemoOptions = stdOptions) {
  const argsCache = new WeakMap<object, readonly unknown[]>()
  const resultCache = new WeakMap<object, unknown>()

  return function (
    target: object,
    property: PropertyKey,
    descriptor: PropertyDescriptor
  ) {
    const method: Function = descriptor.value
    descriptor.value = function (...args: unknown[]) {
      let previous = argsCache.get(this)
      let result = resultCache.get(this)
      if (previous == null || previous.length !== args.length) {
        result = method.apply(this, args)
        previous = args
      } else {
        let i = 0
        while (i < args.length && options.equals(previous[i], args[i])) i++
        if (i < args.length) {
          result = method.apply(this, args)
          previous = args
        } else {
          previous = args
        }
      }
      argsCache.set(this, previous)
      resultCache.set(this, result)
      return result
    }
    return descriptor
  }
}
