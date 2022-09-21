import {
  format as dateFormat,
  formatISO as dateFormatISO,
  formatDistanceToNow,
  Locale
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import i18n from 'i18n-js'

import { splice } from '../utils/strings'

import currencies from './currency'
import * as ptBRTranslations from './pt-BR'
import { TranslationKeys } from './types'

i18n.translations = {
  'pt-BR': { ...ptBRTranslations }
}
i18n.locale = 'pt-BR'

export const translate = (
  scope: TranslationKeys,
  options?: i18n.TranslateOptions
) => i18n.t(scope, options)

export const setLanguage = (language: string) => {
  const isAvaiable = Object.prototype.hasOwnProperty.call(
    i18n.translations,
    language
  )
  if (!isAvaiable) throw new Error('Unavailable language')
  i18n.locale = language
}

export const getLanguage = () => {
  return i18n.locale
}

export const getAvailableLanguages = () => {
  return Object.keys(i18n.translations)
}

type NumberOptions = {
  precision?: number
  separator?: string
  delimiter?: string
  stripInsignificantZeros?: boolean
}

export const formatNumber = (value: number, options?: NumberOptions) => {
  const precision = options?.precision ?? 2
  const separator = options?.separator ?? ','
  const delimiter = options?.delimiter ?? '.'
  const stripInsignificantZeros = options?.stripInsignificantZeros ?? false
  return i18n.toNumber(value, {
    precision,
    separator,
    delimiter,
    strip_insignificant_zeros: stripInsignificantZeros
  })
}

export const formatPercent = (value: number, options?: NumberOptions) => {
  const precision = options?.precision ?? 2
  const separator = options?.separator ?? ','
  const delimiter = options?.delimiter ?? '.'
  const stripInsignificantZeros = options?.stripInsignificantZeros ?? true
  return i18n.toPercentage(value, {
    precision,
    separator,
    delimiter,
    strip_insignificant_zeros: stripInsignificantZeros
  })
}

type CurrencyOptions = NumberOptions & {
  currency?: string
  signFirst?: boolean
}

export const formatCurrency = (value: number, options?: CurrencyOptions) => {
  const precision = options?.precision ?? 2
  const separator = options?.separator ?? ','
  const delimiter = options?.delimiter ?? '.'
  const stripInsignificantZeros = options?.stripInsignificantZeros ?? false
  const currency = options?.currency ?? 'BRL'
  const { unit, format } = currencies[currency] ?? currencies.BRL
  const signFirst = options?.signFirst ?? true
  return i18n.toCurrency(value, {
    precision,
    separator,
    delimiter,
    format,
    unit,
    strip_insignificant_zeros: stripInsignificantZeros,
    sign_first: signFirst
  })
}

type DateOptions = {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: number
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export const formatDate = (
  date: Date | number,
  format = 'dd/MM/yyyy',
  options?: DateOptions
) => {
  const locale = options?.locale ?? ptBR
  const weekStartsOn = options?.weekStartsOn ?? 0
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? 1
  const useAdditionalWeekYearTokens =
    options?.useAdditionalWeekYearTokens ?? false
  const useAdditionalDayOfYearTokens =
    options?.useAdditionalDayOfYearTokens ?? false
  return dateFormat(date, format, {
    locale,
    weekStartsOn,
    firstWeekContainsDate,
    useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens
  })
}

export const convertDateFromUTCToLocal = (
  date: string | null,
  format = 'dd/MM/yyyy HH:mm'
) => {
  if (!date) return ''

  const convertedDate = new Date(date + 'Z')

  if (`${convertedDate}` === 'Invalid Date') {
    return translate('commons.invalidDate')
  }

  return formatDate(convertedDate, format)
}

type DateISOOptions = {
  format?: 'extended' | 'basic'
  representation?: 'complete' | 'date' | 'time'
}

export const formatISODate = (
  date: Date | number,
  options?: DateISOOptions
) => {
  return dateFormatISO(date, options)
}

type DateFromNowOptions = {
  locale?: Locale
  includeSeconds?: boolean
  addSuffix?: boolean
}

export const formatDateFromNow = (
  date: Date | number,
  options?: DateFromNowOptions
) => {
  const locale = options?.locale ?? ptBR
  const includeSeconds = options?.includeSeconds ?? false
  const addSuffix = options?.addSuffix ?? false
  return formatDistanceToNow(date, { locale, includeSeconds, addSuffix })
}

export const formatCNPJ = (cnpj: string) => {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatCPF = (cpf: string) => {
  return cpf.replace(/^(\d{1,3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatCEP = (cep: string) => {
  return cep.replace(/^(\d{5})(\d{3})/, '$1-$2')
}

export const formatCellPhone = (phone: string) => {
  let formattedCellPhone = phone.replace(/\D/g, '')
  formattedCellPhone = formattedCellPhone.replace(/^0/, '')

  const regex =
    formattedCellPhone.length === 11
      ? /^(\d\d)(\d{1,5})(\d{1,4})/
      : /(\d\d)(\d{1,4})(\d{1,4})/

  formattedCellPhone = formattedCellPhone.replace(regex, '($1) $2-$3')

  return formattedCellPhone
}

export const formatPhone = (phone: string, area = '', ext = '') => {
  if (phone.length === 0) return ''
  const formatted = splice(phone, phone.length - 4, '-')
  if (area === '' && ext === '') {
    return formatted
  } else if (area === '') {
    return `${formatted} #${ext}`
  } else if (ext === '') {
    return `${area} ${formatted}`
  } else {
    return `${area} ${formatted} #${ext}`
  }
}
