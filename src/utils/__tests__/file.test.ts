import { getImageMock } from 'jest/utils/mock/image-file-mock'
import {
  getFileUrl,
  readCSV,
  getImageDimensionsFromFile,
  createFileURL,
  convertToCSV,
  downloadBlob
} from 'utils/file'

describe('Testes das funções utils de files', () => {
  const CSV = [
    '"1","val1","val2"',
    '"2","val3","val4"',
    '"3","val5","val7"'
  ].join('\n')

  const contentType = 'text/csv'
  const csvFile = new Blob([CSV as BlobPart], { type: contentType })
  const arquivo = new File([csvFile], 'file.csv', { type: 'text/csv' })

  describe('ao chamar a funcão readCSV', () => {
    test('deve ler o arquivo csv e retornar um string[][]', async () => {
      const data = await readCSV(arquivo)

      expect(data).toEqual([
        ['1', 'val1', 'val2'],
        ['2', 'val3', 'val4'],
        ['3', 'val5', 'val7']
      ])
    })

    test('deve retornara lista de dados sem o header caso seja passada a flag', async () => {
      const data = await readCSV(arquivo, { header: true })

      expect(data).toEqual([
        ['2', 'val3', 'val4'],
        ['3', 'val5', 'val7']
      ])
    })

    test('deve retornar um array vazio caso passe um arquivo vazio', async () => {
      const arquivoVazio = new File([], 'file.csv', { type: 'csv' })

      const data = await readCSV(arquivoVazio)

      expect(data).toEqual([])
    })

    test('deve lançar um erro caso o arquivo seja inválido', async () => {
      try {
        await readCSV(null as unknown as File)
      } catch (error) {
        expect(error).toBeTruthy()
      }
    })
  })

  describe('ao chamar a funcão getImageDimensionsFromFile', () => {
    test('deve retornar as dimensões da imagem corretamente', async () => {
      const imageFile = getImageMock(100, 100)

      const dimensions = await getImageDimensionsFromFile(imageFile)

      expect(dimensions).toEqual({ width: 100, height: 100 })
    })
  })

  describe('ao chamar a funcão createFileURL', () => {
    test('deve retornar a url do arquivo', async () => {
      window.URL.createObjectURL = jest.fn(
        () => 'blob:http://localhost:3000/hash'
      )
      const fileName = 'file-name.csv'
      const fileContent = 'file-content'
      const fileType = 'data:text/csv;charset=utf-8'

      const url = createFileURL(fileName, fileContent, fileType)

      expect(url).toEqual('blob:http://localhost:3000/hash')
    })
  })

  describe('ao chamar a funcão getFileUrl', () => {
    const fileUrl = 'blob:http://localhost:3000/hash'
    window.URL.createObjectURL = jest.fn(() => fileUrl)

    const fileName = 'file-name.csv'
    const fileContent = 'file-content'
    const fileType = 'data:text/csv;charset=utf-8'

    test('deve retornar a url do arquivo', () => {
      const url = getFileUrl(fileName, fileContent, fileType)

      expect(url).toEqual(fileUrl)
    })
  })

  describe('ao chamar a função convertToCSV', () => {
    test('deve converter um array de objetos em um conteúdo para a criação de um arquivo CSV', () => {
      const objectArray = [
        {
          Coluna1: 'content1-1',
          Coluna2: 'content1-2',
          Coluna3: 'content1-3'
        },
        {
          Coluna1: 'content2-1',
          Coluna2: 'content2-2',
          Coluna3: 'content2-3'
        }
      ]

      const result = convertToCSV(objectArray)

      expect(result).toEqual(`Coluna1;Coluna2;Coluna3
content1-1;content1-2;content1-3
content2-1;content2-2;content2-3`)
    })

    test('caso um "customHeader" for informado, deve substituir o header padrão por ele', () => {
      const objectArray = [
        {
          Coluna1: 'content1-1',
          Coluna2: 'content1-2',
          Coluna3: 'content1-3'
        },
        {
          Coluna1: 'content2-1',
          Coluna2: 'content2-2',
          Coluna3: 'content2-3'
        }
      ]
      const customHeader = 'Custom Column1;Custom Column2;Custom Column2'

      const result = convertToCSV(objectArray, customHeader)

      expect(result).toEqual(`Custom Column1;Custom Column2;Custom Column2
content1-1;content1-2;content1-3
content2-1;content2-2;content2-3`)
    })
  })

  describe('ao chamar a funcão downloadBlob', () => {
    const content =
      'EAN/DUN;Pallet Multiplo de DUN;Código do produto no Fornecedor;Valida Estoque\nean_ou_dun_14;0;;false\nean_ou_dun_35;0;;false'

    const contentType = 'text/csv;charset=utf-8;'

    test('deve criar uma âncora <a> com o atributo href sendo o arquivo e clicar para baixar', () => {
      const blob = new Blob([content], { type: contentType })

      const createElementSpy = jest.spyOn(document, 'createElement')
      const createObjectURLSpy = jest.spyOn(URL, 'createObjectURL')

      downloadBlob(content, 'file.csv', contentType)

      expect(createElementSpy).toBeCalledWith('a')
      expect(createObjectURLSpy).toBeCalledWith(blob)
    })
  })
})
