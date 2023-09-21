import React from 'react'
import * as C from './Styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const PerfilSoldado = () => {
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
            <C.Title>Perfil Soldado</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="./Imagem/Produtos/Soldado/conjunto 1.jpg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/Soldado/soldado7.jpg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/Soldado/Soldado1.png" />
            </C.ImageWrapper>
          </C.Wrapper>

          <C.TextWrapper>
          <C.Paragraph>

          Os nossos "Perfis Soldados" são projetados para fornecer força e estabilidade em uma variedade de aplicações, onde a resistência estrutural é essencial. Fabricados com precisão a partir de materiais de alta qualidade, esses perfis são conhecidos por sua confiabilidade e durabilidade.
                  <br /> <br />
          Os Perfis Soldados são frequentemente utilizados em setores como a construção civil, indústria naval, fabricação de equipamentos pesados e muito mais. Sua construção soldada oferece uma excelente relação resistência-peso, tornando-os ideais para aplicações que exigem suporte estrutural sólido.

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

export default PerfilSoldado
