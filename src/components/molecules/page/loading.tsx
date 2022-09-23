import { CircularProgress } from 'components/atoms/CircularProgress'
import { Flex } from 'components/atoms/Flex'
import { ReactNode } from 'react'

type PageLoadingProps = {
  isLoading: boolean
  children?: ReactNode
}

export const PageLoading = ({
  children = null,
  isLoading
}: PageLoadingProps) => {
  return (
    <>
      {isLoading && (
        <Flex
          data-testid="page-loading"
          position="absolute"
          height="100vh"
          width="100vw"
          bgColor="standard.white"
          zIndex={999999999999999}
        >
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            bgColor="blackAlpha.600"
          >
            <CircularProgress
              isIndeterminate
              color="brand.primary-default"
              trackColor="neutral.extradark"
            />
          </Flex>
        </Flex>
      )}
      {children}
    </>
  )
}
