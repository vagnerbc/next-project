export const dateToUTC = (date: Date | number | string) => {
  const dateUTC = new Date(date).toUTCString()
  const dateISO = new Date(dateUTC).toISOString()

  return dateISO.slice(0, 16)
}

export const removeDateTimezone = (date: Date | number | string) => {
  const dateTimezone = new Date(date)
  const timezone = Math.abs(dateTimezone.getTimezoneOffset() * 60000)

  const dateISO = new Date(dateTimezone.getTime() - timezone * 2).toISOString()

  return dateISO.slice(0, 16)
}
