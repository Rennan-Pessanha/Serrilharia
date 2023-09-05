import React from 'react'
import * as C from './Styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const PerfisDePerfiladeira = () => {
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


          <C.TitleWrapper>
            <C.Title>Perfis de Perfiladeira</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/PerfisDePerfiladeira/Perfiladeira5.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/PerfisDePerfiladeira/Perfiladeira1.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/PerfisDePerfiladeira/Perfi5.jpeg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>
          Os nossos "Perfis de Perfiladeira" são projetados para oferecer uma solução eficaz e eficiente na formação de diferentes tipos de perfis metálicos. Fabricados com precisão a partir de materiais de alta qualidade, esses perfisadeiras são projetados para atender às demandas de produção em larga escala e personalização de perfis metálicos.

            <br /> <br />

            As Perfiladeiras são conhecidas por sua capacidade de moldar metais em uma variedade de formas e tamanhos. Elas são essenciais em setores como a construção civil, fabricação de estruturas metálicas, sistemas de dutos e muito mais. Nossos Perfis de Perfiladeira são projetados para oferecer uma operação suave e consistente, garantindo alta qualidade e precisão em cada perfil produzido.

          </C.Paragraph>
          </C.TextWrapper>
          
          <C.AccessButtonWrapper>
              <C.AccessButton to="/FaleConosco">COMPRAR</C.AccessButton>
            </C.AccessButtonWrapper>

    </C.Container>
    <Footer />


    </div>
  )
}

export default PerfisDePerfiladeira
