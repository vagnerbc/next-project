import { useEffect } from '@storybook/addons'
import { PageLoading } from 'components/molecules/page/loading'
import { useMutationAuth } from 'hooks/queries/auth'
import { useRouter } from 'next/router'
import { createContext, useContext, useState } from 'react'

export type ContextType = {
  login: ({ email, password }: { email: string; password: string }) => void
  logout: () => void
}

export const Context = createContext<ContextType>({} as ContextType)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const mutateAuth = useMutationAuth()

  const logout = () => {
    localStorage.removeItem('access_token')
    router.push('/login')
  }

  const login = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    await mutateAuth.mutateAsync({ email, password })
  }

  // useEffect(() => {
  //   document.addEventListener('onAuthSuccess', () => {
  //     setIsLoading(false)
  //     const token = ''
  //     localStorage.setItem('access_token', token)
  //   })

  //   // outros eventos
  //   // onAuthError
  //   // onTokenExpired
  //   // onAuthRefreshSuccess
  //   // onAuthRefreshError

  //   return () => {
  //     document.removeEventListener('onAuthSuccess', () => {})
  //   }
  // }, [])

  return (
    <>
      {/* <PageLoading isLoading={isLoading} /> */}
      <Context.Provider value={{ login, logout }}>{children}</Context.Provider>
    </>
  )
}

export const useAuth = () => {
  return useContext(Context)
}
