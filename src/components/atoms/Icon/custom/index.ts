import productPackage from './product-package'

export const customIconNames = ['custom-product_package'] as const

export type CustomIconNames = typeof customIconNames[number]

export const customIcons = {
  product_package: productPackage
}
