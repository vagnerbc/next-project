import { useMutation, useQuery } from 'react-query'
import { AuthService } from 'services/auth'

export function useQueryGet(email: string) {
  return useQuery('get', () => get(email))
}

export function useMutationAuth() {
  return useMutation(
    ({ email, password }: { email: string; password: string }) =>
      auth(email, password)
  )
}

const get = async (email: string) => {
  const response = await AuthService.get(email)

  return response.data
}

const auth = async (email: string, password: string) => {
  const response = await AuthService.auth(email, password)

  return response.data
}
