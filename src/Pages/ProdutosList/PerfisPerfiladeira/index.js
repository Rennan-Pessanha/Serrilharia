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

        <C.ProductAlign>


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

          As perfiladeiras são conhecidas pela capacidade de confirmar em processo contínuo o aço em uma variedade de modelos, formas, comprimentos e espessuras, certamente uma de nossas muitas opções atenderá sua necessidade, diferente do que existe no mercado convencional nossa capacidade de comprimento é de 17,5 metros.

          </C.Paragraph>
          </C.TextWrapper>
          
          <C.AccessButtonWrapper>
              <C.AccessButton to="/FaleConosco">COMPRAR</C.AccessButton>
            </C.AccessButtonWrapper>
</C.ProductAlign>
    </C.Container>
    <Footer />


    </div>
  )
}

export default PerfisDePerfiladeira
