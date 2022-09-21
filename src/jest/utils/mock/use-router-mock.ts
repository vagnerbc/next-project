jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn()
  })
}))

export default {}
