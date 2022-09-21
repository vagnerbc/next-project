export type PaginationType = {
  totalItems: number
  currentPage: number
  pageSize: number
  totalPages: number
  startIndex: number
  endIndex: number
  pages: Array<number>
}

export const paginate = (
  totalItems: number,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10
): PaginationType => {
  const totalPages = Math.ceil(totalItems / pageSize)

  if (currentPage < 1) {
    currentPage = 1
  } else if (currentPage > totalPages) {
    currentPage = totalPages
  }

  let startPage: number, endPage: number
  if (totalPages <= maxPages) {
    startPage = 1
    endPage = totalPages
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    i => startPage + i
  )

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  }
}
