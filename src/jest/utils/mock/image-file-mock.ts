type ImageConstructor = new (
  width?: number | undefined,
  height?: number | undefined
) => HTMLImageElement

export const getImageMock = (width: number, height: number) => {
  global.Image = class {
    public naturalWidth = width
    public naturalHeight = height

    onload: () => void

    constructor() {
      this.onload = jest.fn()
      setTimeout(() => {
        this.onload()
      }, 100)

      return this
    }
  } as unknown as ImageConstructor

  const type = 'image/png'

  const imageUint8Array = new Uint8Array([
    137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 8, 0,
    0, 0, 8, 8, 2, 0, 0, 0, 75, 109, 41, 220, 0, 0, 0, 34, 73, 68, 65, 84, 8,
    215, 99, 120, 173, 168, 135, 21, 49, 0, 241, 255, 15, 90, 104, 8, 33, 129,
    83, 7, 97, 163, 136, 214, 129, 93, 2, 43, 2, 0, 181, 31, 90, 179, 225, 252,
    176, 37, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130
  ])
  const imageBlob = new Blob([imageUint8Array], { type })
  return new File([imageBlob], 'image.png', { type })
}
