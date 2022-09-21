export type RegexFieldType = 'ONLY_NUMBERS' | 'PAYMENT_METHOD'

const onlyNumbersRegex = /^\d+(\.\d{0,2})?$/
const paymentMethodRegex = /^(?![/])(?!.*[^n0-9]{2})[0-9/]+$/

export const emailRegex =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

const regexes = {
  ONLY_NUMBERS: onlyNumbersRegex,
  PAYMENT_METHOD: paymentMethodRegex
}

type ValidateProps = {
  value: string
  type: RegexFieldType
  customRegex?: RegExp
}

export function validate({ value, type, customRegex }: ValidateProps) {
  const regex = customRegex || regexes[type]
  const text = type === 'ONLY_NUMBERS' ? value.replace(/,+/g, '.') : value

  return regexValidate(text, regex)
}

function regexValidate(value: string, regex: RegExp) {
  return {
    text: value,
    isValid: !!value.match(regex)
  }
}
