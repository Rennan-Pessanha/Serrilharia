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
        <C.ProductAlign>

          <C.TitleWrapper>
            <C.Title>Perfis Tubular</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="./Imagem/Produtos/Tubular/TubularII.png" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/Tubular/TubularIII.png" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="./Imagem/Produtos/Tubular/TubularIV.png" />
            </C.ImageWrapper>
          </C.Wrapper>

          <C.TextWrapper>
          <C.Paragraph>

          Semelhantemente aos nossos perfis especiais, também São dobrados de chapa atendendo assim a necessidade de cada projeto.
          Sua fabricação final termina com tubo com apenas uma abertura para solda, criando assim maior robustez bem como melhor desing, podendo serem fabricados com aço comercial ou classificado, respeitando resistência solicitada pelo projeto, sendo diferenciado pela gama de possibilidades com seus diversos comprimentos e espessuras.

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

export default PerfisTubular
