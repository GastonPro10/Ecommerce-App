import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'none'
  },
  defaultProps: {
    colorScheme: 'brand',
  },
})

const theme = extendTheme({
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}
