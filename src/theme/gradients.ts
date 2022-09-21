export const standard = {
  white:
    'linear-gradient(0deg, rgba(255, 255, 255, 0) 6.95%, rgba(255, 255, 255, 0.697733) 42.27%, #FFFFFF 95.31%);'
}

type FaddingMaskProps = {
  gradient: string
  height: string
  borderRadius?: string
  bottom?: number
  top?: number
}

export const faddingMask = (props: FaddingMaskProps) => {
  return {
    position: 'absolute',
    content: '""',
    width: '100%',
    zIndex: 10,
    height: props.height,
    bottom: props.bottom,
    top: props.top,
    left: 0,
    background: props.gradient,
    borderRadius: props.borderRadius || 'md'
  }
}
