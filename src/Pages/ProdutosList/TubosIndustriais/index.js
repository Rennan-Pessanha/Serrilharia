import React from 'react'
import * as C from './styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const TubosIndustriais = () => {
  return (
    <div>
    <C.Container>
        <C.Content>
            <Link to="/">
            <C.Logo src='./Imagem/LogoSerralheria.png' />
            </Link>
            <C.Content>
            <C.NavContent>

            <C.Navs>
            <C.Navs to="/">Home</C.Navs>
            </C.Navs>

            <C.Navs>
            <C.Navs to="/Perfil">Empresa</C.Navs>
            </C.Navs>

            <C.Navs>
            <C.Navs to="/Produtos">Produtos</C.Navs>
            </C.Navs>

            <C.Navs>
            <C.Navs to="/FaleConosco">Contatos</C.Navs>
            </C.Navs>
            </C.NavContent>

        </C.Content>
        </C.Content>
        <C.ProductAlign>

          <C.TitleWrapper>
            <C.Title>Tubos Industriais</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/TubosIndustriais/tubosin3.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/TubosIndustriais/tuboin2.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/TubosIndustriais/Tubosin.jpeg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>

          Tubos industriais são uma parte essencial de muitos processos e sistemas em uma ampla variedade de indústrias. Eles são projetados para transportar líquidos, gases e até mesmo sólidos em algumas aplicações, desempenhando um papel crucial na condução de fluidos e materiais de um ponto a outro.
            <br />  <br />
          Esses tubos são conhecidos por sua durabilidade e resistência, tornando-os ideais para ambientes desafiadores e condições rigorosas. Eles são utilizados em uma ampla gama de indústrias, desde petróleo e gás até alimentos e bebidas, construção civil, automobilística e muitas outras.
            
          </C.Paragraph>
          </C.TextWrapper>
          
          <C.AccessButtonWrapper>
              <C.AccessButton to="/FaleConosco">Consultar</C.AccessButton>
            </C.AccessButtonWrapper>

            </C.ProductAlign>
    </C.Container>
    <Footer />


    </div>
  )
}

export default TubosIndustriais
