import { GlobalStyle } from '~/styles/global'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
