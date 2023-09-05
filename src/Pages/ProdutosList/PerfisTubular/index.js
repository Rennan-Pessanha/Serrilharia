import React from 'react'
import * as C from './styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const PerfisTubular = () => {
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
            <C.Title>Perfis Tubular</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="./Imagem/Produtos/Tubular/TubularII.png" />
              <C.ImageName>Tubular 4,75 x 200 x 200 x 7500</C.ImageName>
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Tubular/TubularIII.png" />
              <C.ImageName>Tubular 4,75 x 250 x 80 x 8000</C.ImageName>
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/Tubular/TubularIV.png" />
              <C.ImageName>Tubular 390 x 400 x 8,00 x 7200</C.ImageName>
            </C.ImageWrapper>
          </C.Wrapper>

          <C.TextWrapper>
          <C.Paragraph>
          Os nossos "Perfis Tubulares" são projetados para oferecer versatilidade e resistência em uma variedade de aplicações. Fabricados com precisão a partir de materiais de alta qualidade, esses perfis apresentam uma seção transversal oca, tornando-os ideais para uma ampla gama de usos, desde estruturas de suporte até projetos de design arquitetônico.
                    <br /> <br />
          Os Perfis Tubulares são conhecidos por sua força e durabilidade, tornando-os uma escolha popular em setores como a construção civil, fabricação de móveis, indústria automobilística e muito mais. Sua seção transversal oca oferece uma excelente relação resistência-peso, o que os torna ideais para aplicações que exigem componentes estruturais leves, mas robustos.
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

export default PerfisTubular
