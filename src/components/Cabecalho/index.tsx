import { CabecalhoStyle, BtnTema } from './styles'

type Props = {
  trocaTema: () => void
}

const Cabecalho = (props: Props) => (
  <CabecalhoStyle>
    <h1>EBAC Jobs</h1>
    <BtnTema onClick={props.trocaTema}>Trocar tema</BtnTema>
  </CabecalhoStyle>
)

export default Cabecalho
