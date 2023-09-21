import React from 'react'
import * as C from './Styled.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const Parafusos = () => {
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
            <C.Title>Parafusos</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/Parafusos/Parafuso1.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Parafusos/Parafuso2.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Parafusos/Parafuso3.jpeg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>

          Os parafusos desempenham um papel fundamental na construção e montagem de praticamente tudo ao nosso redor. Eles são os pequenos heróis que mantêm as coisas unidas e garantem que estruturas e dispositivos permaneçam sólidos e funcionais.
          <br /> <br />
          Nossos parafusos são fabricados com um compromisso inabalável com a qualidade. Utilizamos materiais de alta resistência e processos de fabricação de última geração para garantir que cada parafuso que produzimos atenda aos mais altos padrões de desempenho e durabilidade.

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

export default Parafusos
