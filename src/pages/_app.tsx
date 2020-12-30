import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from '../styles/theme';
import {Fonts} from '../styles/typography'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
