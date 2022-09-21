import { sub } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import {
  formatCellPhone,
  formatCEP,
  formatCNPJ,
  formatCPF,
  formatCurrency,
  formatDate,
  formatDateFromNow,
  formatNumber,
  formatPercent,
  formatISODate,
  formatPhone,
  getAvailableLanguages,
  getLanguage,
  setLanguage,
  translate,
  convertDateFromUTCToLocal
} from '..'

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'))
describe('Testes de formatadores de traduções', () => {
  test('deve traduzir corretamente', () => {
    expect(translate('commons.add')).toEqual('Adicionar')
    expect(translate('commons.cancel')).toEqual('Cancelar')
  })

  test('deve retornar o idioma atual', () => {
    expect(getLanguage()).toEqual('pt-BR')
  })

  test('deve retornar os idiomas disponíveis', () => {
    expect(getAvailableLanguages()).toEqual(['pt-BR'])
  })

  test('deve mudar o idioma atual', () => {
    setLanguage('pt-BR')

    expect(getLanguage()).toEqual('pt-BR')
  })

  test('deve dar erro mudar o idioma atual para um que não existe, e não alterar', () => {
    const func = () => {
      setLanguage('cn-CH')
    }

    expect(func).toThrow(Error)
    expect(func).toThrow('Unavailable language')
  })

  test('deve formatar o CEP corretamente', () => {
    expect(formatCEP('87709220')).toEqual('87709-220')
    expect(formatCEP('87703-240')).toEqual('87703-240')
  })

  test('deve formatar o número corretamente com 2 casas decimais', () => {
    expect(formatNumber(1289)).toEqual('1.289,00')
    expect(formatNumber(17.89)).toEqual('17,89')
  })

  test('deve formatar o número corretamente com 1 casa decimal, com separador "." e delimitador "," e remover zeros desnecessários', () => {
    expect(
      formatNumber(1289, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true
      })
    ).toEqual('1,289')
    expect(
      formatNumber(17.89, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true
      })
    ).toEqual('17.9')
  })

  test('deve formatar a porcentagem corretamente com 2 casas decimais', () => {
    expect(formatPercent(100)).toEqual('100%')
    expect(formatPercent(17.89)).toEqual('17,89%')
  })

  test('deve formatar a porcentagem corretamente com 1 casa decimal, com separador "." e delimitador "," e remover zeros desnecessários', () => {
    expect(
      formatPercent(100, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true
      })
    ).toEqual('100%')
    expect(
      formatPercent(17.89, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true
      })
    ).toEqual('17.9%')
  })

  test('deve formatar o CPF corretamente', () => {
    expect(formatCPF('03483362956')).toEqual('034.833.629-56')
    expect(formatCPF('108.553.721-62')).toEqual('108.553.721-62')
  })

  test('deve formatar o CNPJ corretamente', () => {
    expect(formatCNPJ('28404748000179')).toEqual('28.404.748/0001-79')
    expect(formatCNPJ('38.307.382/0001-73')).toEqual('38.307.382/0001-73')
  })

  test('deve formatar a monetização corretamente com 2 casas decimais', () => {
    expect(formatCurrency(2.99)).toEqual('R$\xa02,99')
    expect(formatCurrency(7.5679)).toEqual('R$\xa07,57')
  })

  test('deve formatar a monetização corretamente com 2 casas decimais e moeda brasileira caso passe algum código de moeda inválido', () => {
    expect(formatCurrency(2.99, { currency: 'BBB' })).toEqual('R$\xa02,99')
    expect(formatCurrency(7.5679, { currency: 'BBB' })).toEqual('R$\xa07,57')
  })

  test('deve formatar a monetização corretamente com 1 casa decimal, com separador "." e delimitador ",", remover zeros desnecessários e com moeda americana', () => {
    expect(
      formatCurrency(2.99, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true,
        currency: 'USD',
        signFirst: false
      })
    ).toEqual('$\xa03')
    expect(
      formatCurrency(7.5679, {
        precision: 1,
        separator: '.',
        delimiter: ',',
        stripInsignificantZeros: true,
        currency: 'USD',
        signFirst: false
      })
    ).toEqual('$\xa07.6')
  })

  test('deve formatar o celular corretamente', () => {
    expect(formatCellPhone('984385922')).toEqual('(98) 4385-922')
    expect(formatCellPhone('44984385922')).toEqual('(44) 98438-5922')
    expect(formatCellPhone('4484385922')).toEqual('(44) 8438-5922')
  })

  test('deve formatar o telefone corretamente', () => {
    expect(formatPhone('984385922')).toEqual('98438-5922')
    expect(formatPhone('984385922', '44')).toEqual('44 98438-5922')
  })

  test('Caso o telefone não esteja preenchido, deve retornar em branco', () => {
    expect(formatPhone('')).toEqual('')
  })

  test('Deve formatar corretamente caso passe o número do telefone, não passe código de área e passe o código do pais', () => {
    expect(formatPhone('984385922', '', '55')).toEqual('98438-5922 #55')
    expect(formatPhone('999779758', '', '1')).toEqual('99977-9758 #1')
  })

  test('Deve formatar corretamente caso passe o número do telefone, o código de área e o código do pais', () => {
    expect(formatPhone('984385922', '43', '55')).toEqual('43 98438-5922 #55')
    expect(formatPhone('999779758', '11', '1')).toEqual('11 99977-9758 #1')
  })

  test('deve formatar a data corretamente', () => {
    expect(formatDate(new Date('2022-04-26T13:51:53.020Z'))).toEqual(
      '26/04/2022'
    )
    expect(formatDate(new Date('2022-04-26T13:51'))).toEqual('26/04/2022')
    expect(formatDate(1650981147322)).toEqual('26/04/2022')
  })

  test('deve formatar a data corretamente com o padrão de mês/dia/ano, com a semana começando na segunda', () => {
    expect(
      formatDate(new Date('2022-04-26T13:51:53.020Z'), 'MM/dd/yyyy', {
        locale: enUS,
        weekStartsOn: 1,
        firstWeekContainsDate: 2,
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true
      })
    ).toEqual('04/26/2022')
    expect(formatDate(new Date('2022-04-26T13:51'))).toEqual('26/04/2022')
    expect(formatDate(1650981147322)).toEqual('26/04/2022')
  })

  test('deve formatar uma data para exibição na localidade atual usando o tempo relativo', () => {
    expect(formatDateFromNow(sub(new Date(), { months: 1 }))).toEqual(
      'cerca de 1 mês'
    )
    expect(formatDateFromNow(sub(new Date(), { months: 6 }))).toEqual('6 meses')
    expect(formatDateFromNow(sub(new Date(), { months: 12 }))).toEqual(
      'cerca de 1 ano'
    )
  })

  test('deve formatar uma data para exibição usando o tempo relativo', () => {
    expect(
      formatDateFromNow(sub(new Date(), { months: 1 }), {
        locale: enUS,
        includeSeconds: true,
        addSuffix: true
      })
    ).toEqual('about 1 month ago')

    expect(
      formatDateFromNow(sub(new Date(), { months: 6 }), {
        locale: enUS,
        includeSeconds: true,
        addSuffix: true
      })
    ).toEqual('6 months ago')

    expect(
      formatDateFromNow(sub(new Date(), { months: 12 }), {
        locale: enUS,
        includeSeconds: true,
        addSuffix: true
      })
    ).toEqual('about 1 year ago')
  })

  test('Deve retornar a data no formato correto', () => {
    expect(
      formatISODate(new Date(2022, 8, 18, 19, 0, 52), {
        representation: 'date'
      })
    ).toEqual('2022-09-18')
  })

  test('deve converter de UTC para local e retornar a data completa', () => {
    const date = '2022-08-01T13:04:47.016732'
    const localDateTime = convertDateFromUTCToLocal(date)

    const checkLocalDate = new Date(date + 'Z')

    expect(localDateTime).toBe(formatDate(checkLocalDate, 'dd/MM/yyyy HH:mm'))
  })

  test('deve converter de UTC para local e retornar a hora', () => {
    const date = '2022-08-01T13:04:47.016732'
    const localDateTime = convertDateFromUTCToLocal(date, 'hh:mm')

    const checkLocalDate = new Date(date + 'Z')

    expect(localDateTime).toBe(formatDate(checkLocalDate, 'hh:mm'))
  })

  test('deve converter de UTC para local e retornar só a data data', () => {
    const date = '2022-08-01T13:04:47.016732'
    const localDateTime = convertDateFromUTCToLocal(date, 'dd/MM/yyyy')

    const checkLocalDate = new Date(`${date}Z`)

    expect(localDateTime).toBe(formatDate(checkLocalDate, 'dd/MM/yyyy'))
  })

  test('deve retornar empty quando a data for nula', () => {
    const localDateTime = convertDateFromUTCToLocal(null, 'toLocaleDateString')

    expect(localDateTime).toBe('')
  })

  test('deve retornar data inválida quando o parametro for inválido', () => {
    const localDateTime = convertDateFromUTCToLocal('sakslakslçkal')

    expect(localDateTime).toBe('Data Inválida')
  })
})
