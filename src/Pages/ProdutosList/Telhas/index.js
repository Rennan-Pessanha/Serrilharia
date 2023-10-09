import React from 'react'
import * as C from './style.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const Telhas = () => {
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
            <C.Title>Telhas</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="./Imagem/Produtos/telhas/Telha2.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/telhas/Telha1.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/telhas/Telha3.jpeg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>

          Nossas telhas são fabricadas com o mesmo compromisso com a qualidade que aplicamos em todos os nossos produtos. Utilizando tecnologia de ponta e materiais de primeira qualidade, produzimos telhas que atendem às mais rigorosas normas e padrões de desempenho.
            <br />
          As telhas desempenham um papel fundamental na proteção e na estética de qualquer construção. É por isso que nos esforçamos para oferecer uma ampla variedade de opções de telhas que se encaixam perfeitamente nas necessidades de cada projeto.

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

export default Telhas
