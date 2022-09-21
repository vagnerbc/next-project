type Currency = {
  unit: string
  format: string
}

export default {
  USD: {
    unit: '$',
    format: '%u\xa0%n'
  },
  BRL: {
    unit: 'R$',
    format: '%u\xa0%n'
  }
} as Record<string, Currency>
