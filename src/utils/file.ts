const processCSV = (
  str: string,
  delim: string,
  hasHeader: boolean
): string[][] => {
  const rows = str
    .split('\n')
    .filter(str => str.length > 0)
    .map(item => item.replace(/"/g, '').trim())

  if (hasHeader) {
    rows.splice(0, 1)
  }

  const newArray = rows.map(row => {
    const values = row.split(delim)

    return values
  })

  return newArray
}

type Options = {
  delim?: string
  header?: boolean
}

export const readCSV = async (
  arquivo: File,
  options: Options = {}
): Promise<string[][]> => {
  const { delim = ',', header = false } = options
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsText(arquivo)
      reader.onload = e => {
        const text = e.target?.result

        if (!text) resolve([])

        if (typeof text !== 'string')
          return reject(new Error('Erro ao converter arquivo csv'))

        const data = processCSV(text, delim, header)
        resolve(data)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export const getImageDimensionsFromFile = async (imageFile: File) => {
  return new Promise<{
    width: number
    height: number
  }>(resolve => {
    const reader = new FileReader()

    reader.onload = () => {
      const img = new Image()
      img.src = reader.result as string

      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        })
      }
    }

    reader.readAsDataURL(imageFile)
  })
}

export const createFileURL = (
  fileName: string,
  fileContent: string,
  fileType: string
) => {
  const file = new File([fileContent], fileName, { type: fileType })
  return URL.createObjectURL(file)
}

export const convertToCSV = (arr: any[], customHeader?: string) => {
  const headers = customHeader || Object.keys(arr[0]).join(';')
  const content = arr.map(value => Object.values(value).join(';'))

  return [headers].concat(content).join('\n')
}

export const getFileUrl = (filename: string, content: string, type: string) => {
  const url = createFileURL(filename, content, type)

  return url
}

export const downloadBlob = (
  content: string,
  filename: string,
  contentType: string
) => {
  const blob = new Blob([content], { type: contentType })
  const url = URL.createObjectURL(blob)

  const pom = document.createElement('a')
  pom.href = url
  pom.setAttribute('download', filename)
  pom.click()
}
