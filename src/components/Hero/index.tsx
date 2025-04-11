import { Formulario, Container, HeroTitle, BtnTema } from './styles'

type Props = {
  trocaTema: () => void
}

const Hero = (props: Props) => (
  <Formulario>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
      <BtnTema onClick={props.trocaTema}>Trocar tema</BtnTema>
    </Container>
  </Formulario>
)

export default Hero
