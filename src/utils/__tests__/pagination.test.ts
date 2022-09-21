import { paginate } from '../pagination'

describe('Utilitário para paginação', () => {
  test('Deve criar paginação corretamente', () => {
    const totalItems = 200
    const perPage = 10
    const currentPage = 1

    const pagination = paginate(totalItems, currentPage, perPage)

    expect(pagination).toStrictEqual({
      totalItems: 200,
      currentPage: 1,
      pageSize: 10,
      totalPages: 20,
      startIndex: 0,
      endIndex: 9,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
  })

  test('Deve paginar corretamente quando atualizar os valores', () => {
    const totalItems = 200
    const perPage = 10
    const currentPage = 10

    const pagination = paginate(totalItems, currentPage, perPage)

    expect(pagination).toStrictEqual({
      totalItems: 200,
      currentPage: 10,
      pageSize: 10,
      totalPages: 20,
      startIndex: 90,
      endIndex: 99,
      pages: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    })
  })

  test('Deve alterar página a quantidade da páginação se necessário', () => {
    const pagination = paginate(200, 5, 5)
    expect(pagination.pageSize).toBe(5)
  })

  test('O total de página deve estar correto', () => {
    const totalItems = 200
    const perPage = 5
    const currentPage = 5
    const pagination = paginate(totalItems, currentPage, perPage)

    expect(pagination.totalPages).toBe(totalItems / perPage)
  })

  test('Deve se manter na ultima página se a mágina atual for maior que o total de páginas', () => {
    const totalItems = 50
    const currentPage = 6
    const pageLimit = 5

    const pagination = paginate(totalItems, currentPage)
    expect(pagination.currentPage).toBe(pageLimit)
  })

  test('Quando chegar no final é preciso fazer a paginação contrária', () => {
    const totalItems = 70
    const currentPage = 6

    const pagination = paginate(totalItems, currentPage, 10, 5)

    expect(pagination.pages).toStrictEqual([3, 4, 5, 6, 7])
  })

  test('Não deve da erro quando não houver valores iniciais', () => {
    const totalItems = 0
    const currentPage = 0

    const pagination = paginate(totalItems, currentPage)

    expect(pagination).toStrictEqual({
      totalItems: 0,
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
      startIndex: 0,
      endIndex: -1,
      pages: []
    })
  })
})
