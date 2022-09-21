import React from 'react'

import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import { HStack } from '../Stack'

type PaginatorSize = 'sm' | 'md' | 'lg'

type PaginatorProps = {
  currentPage: number
  lastPage: number
  offsetSize?: number
  size?: PaginatorSize
  onChangePage: (page: number) => void
}

export const Paginator = ({
  currentPage,
  lastPage,
  offsetSize = 3,
  size = 'md',
  onChangePage
}: PaginatorProps) => {
  const commonProps = {
    variant: 'default-outline',
    size
  }

  const elementsToRender: JSX.Element[] = []

  const handleChangePage = (page: number) => {
    if (page < 0) {
      onChangePage(0)
      return
    }
    onChangePage(page)
  }

  const prevPage = currentPage - 1
  elementsToRender.push(
    <IconButton
      key={`prev-page-${prevPage}`}
      isDisabled={!(currentPage - 1 >= 0)}
      icon={<Icon name="chevron_left" />}
      onClick={() => handleChangePage(prevPage)}
      aria-label="Página anterior"
      {...commonProps}
    />
  )

  const currentPageID = currentPage + 1
  const buttonsOnScreen = offsetSize + 2
  const hasButtonMore =
    lastPage > buttonsOnScreen + 1 && lastPage > 5 && offsetSize > 0

  let leftHideNumbers = [0]
  let rightHideNumbers = [0]

  for (let index = 0; index < lastPage; index++) {
    const indexID = index + 1
    const hasLeftMoreButton =
      currentPageID - offsetSize > 1 && currentPageID > 3
    const extraIndex = offsetSize % 2 === 0 ? 1 : 0
    const keyValue = Math.trunc(offsetSize / 2) + (offsetSize % 2)
    const lastOffsetRealIndex = currentPageID + keyValue
    const hasRightMoreButton = lastPage - lastOffsetRealIndex >= 2 + extraIndex

    const leftHideRange = hasRightMoreButton
      ? currentPageID - keyValue - 1
      : lastPage - (2 + offsetSize + (offsetSize === 1 ? offsetSize : 0))

    if (hasButtonMore && hasLeftMoreButton) {
      leftHideNumbers = Array.from({ length: leftHideRange }, (_, i) => i + 2)
    }

    const indexFrom = offsetSize === 1 ? 3 : 2
    const hideFrom = hasLeftMoreButton
      ? lastOffsetRealIndex + extraIndex
      : offsetSize + indexFrom

    const hiddenRight = hasLeftMoreButton
      ? lastOffsetRealIndex
      : indexFrom + offsetSize

    if (hasButtonMore && hasRightMoreButton) {
      rightHideNumbers = Array.from(
        { length: lastPage - hiddenRight },
        (_, i) => i + hideFrom
      )
    }

    if (hasButtonMore) {
      if (indexID === 2 && hasLeftMoreButton) {
        elementsToRender.push(
          <IconButton
            key={'show-befores-pages'}
            icon={<Icon name="more_horiz" />}
            onClick={() => handleChangePage(currentPage - offsetSize)}
            aria-label="Mostrar páginas anteriores"
            {...commonProps}
          />
        )
      }

      if (indexID === lastPage - 1 && hasRightMoreButton) {
        elementsToRender.push(
          <IconButton
            key={'show-after-pages'}
            icon={<Icon name="more_horiz" />}
            onClick={() => handleChangePage(currentPage + offsetSize)}
            aria-label="Mostrar páginas anteriores"
            {...commonProps}
          />
        )
      }
    }

    const hiddenNumbers = [...leftHideNumbers, ...rightHideNumbers]

    if (
      !hiddenNumbers.includes(indexID) ||
      [currentPageID, lastPage].includes(indexID)
    ) {
      elementsToRender.push(
        <IconButton
          key={`page-${indexID}`}
          data-testid={`button-page-${indexID}`}
          bgColor={index === currentPage ? 'brand.primary-lightest' : undefined}
          borderColor={
            index === currentPage ? 'brand.primary-lightest' : undefined
          }
          onClick={() => handleChangePage(index)}
          icon={<>{indexID}</>}
          aria-label={`Página ${indexID}`}
          {...commonProps}
        />
      )
    }
  }

  const nextPage = currentPage + 1
  elementsToRender.push(
    <IconButton
      key={`next-page-${nextPage}`}
      icon={<Icon name="chevron_right" />}
      isDisabled={nextPage === lastPage}
      onClick={() => handleChangePage(nextPage)}
      aria-label="Proxima página"
      {...commonProps}
    />
  )

  return <HStack spacing="nano">{elementsToRender}</HStack>
}
