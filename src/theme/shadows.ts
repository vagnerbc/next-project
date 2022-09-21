import { colors } from './colors'
import { rgba } from './utils/colors'

const neutralDarkestRGBA = rgba(colors.neutral.darkest, 0.16)
const primaryDefaultRGBA = rgba(colors.brand['primary-default'], 0.16)

export const shadows = {
  'primary-level1': `0px 4px 8px ${neutralDarkestRGBA}`,
  'primary-level2': `0px 8px 24px ${neutralDarkestRGBA}`,
  'primary-level3': `0px 16px 32px ${neutralDarkestRGBA}`,
  'primary-level4': `0px 16px 48px ${neutralDarkestRGBA}`,
  'secondary-level1': `0px 4px 8px ${primaryDefaultRGBA}`,
  'secondary-level2': `0px 8px 24px ${primaryDefaultRGBA}`,
  'secondary-level3': `0px 16px 32px ${primaryDefaultRGBA}`,
  'secondary-level4': `0px 16px 48px ${primaryDefaultRGBA}`
}
