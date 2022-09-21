import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbProps
} from '@chakra-ui/react'
import React from 'react'

export type Crumb = {
  name: string
  path: string
}

type Props = BreadcrumbProps & {
  crumbs: Crumb[]
}

export const Breadcrumb = (props: Props) => {
  const { crumbs, ...rest } = props

  return crumbs.length < 1 ? null : (
    <ChakraBreadcrumb fontWeight="medium" fontSize="sm" {...rest}>
      {crumbs.map((item, index) => {
        const isTheLast = index === crumbs.length - 1
        return (
          <ChakraBreadcrumbItem
            key={item.path}
            fontWeight="bold"
            color={isTheLast ? 'brand.primary-default' : 'neutral.extradark'}
            isCurrentPage={isTheLast}
          >
            <ChakraBreadcrumbLink href={item.path}>
              {item.name}
            </ChakraBreadcrumbLink>
          </ChakraBreadcrumbItem>
        )
      })}
    </ChakraBreadcrumb>
  )
}
