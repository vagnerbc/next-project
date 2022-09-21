export const sortByDate = (valueOne: any, valueTwo: any) => {
  const dateOne: Date = new Date(valueOne)
  const dateTwo: Date = new Date(valueTwo)

  return dateOne.getTime() - dateTwo.getTime()
}
