import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'

import temaLight from './theme/light'
import { useState } from 'react'
import temaDark from './theme/dark'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }
  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header />
      <Hero trocaTema={trocaTema} />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
