import { dateToUTC, removeDateTimezone } from 'utils/date'

jest.useFakeTimers().setSystemTime(new Date('2022-08-12'))

describe('utilitários de data', () => {
  test('dateToUTC: deve retornar a data em UTC corretamente', () => {
    const dateToTest = '2022-08-12T12:22'

    const removedTimezone = removeDateTimezone(dateToTest)
    const formatedDate = dateToUTC(removedTimezone)

    expect(formatedDate).toEqual(dateToTest)
  })

  test('removeDateTimezone: deve retornar a data sem UTC corretamente', () => {
    const dateToTest = '2022-08-12T15:22'

    const addedTimezone = dateToUTC(dateToTest)
    const formatedDate = removeDateTimezone(addedTimezone)

    expect(formatedDate).toEqual(dateToTest)
  })
})
