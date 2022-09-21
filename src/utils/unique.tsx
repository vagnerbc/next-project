import { faker } from '@faker-js/faker'

export const generateUniqueMock = (method: any) => {
  return faker.unique(method, [], { maxTime: 10000, maxRetries: 10000 })
}
