import React from 'react'
import * as C from './styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const Laminado = () => {
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
            <C.Title>Perfil Laminado</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/Laminado/perfillaminado3.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Laminado/Perfillaminado1.jpeg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Laminado/Perfillaminado2.jpeg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>
          Os nossos "Perfis Laminados" são produtos de aço que passaram por um processo de laminação a quente para criar formas específicas, como vigas, cantoneiras, trilhos e muito mais. Esses perfis são conhecidos pela sua resistência e versatilidade, tornando-os fundamentais em uma ampla gama de aplicações estruturais e industriais.

            <br /> <br />

            Os Perfis Laminados são frequentemente utilizados na construção civil para criar estruturas robustas, como vigas em edifícios, pontes e estruturas industriais. Eles são projetados para suportar cargas pesadas e oferecer estabilidade a longo prazo.
          </C.Paragraph>
          </C.TextWrapper>
          
          <C.AccessButtonWrapper>
              <C.AccessButton to="/FaleConosco">Consultar</C.AccessButton>
            </C.AccessButtonWrapper>

    </C.Container>
    <Footer />
    </div>
  )
}

export default Laminado
