import React from 'react'
import * as C from './Styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const PerfisEspeciais = () => {
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
            <C.Title>Perfis Especiais</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/PerfisEspeciais/Especial1.jpg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/PerfisEspeciais/Especial2.jpg" />
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/PerfisEspeciais/Especial3.jpg" />
            </C.ImageWrapper>
          </C.Wrapper>

        <C.TextWrapper>
          <C.Paragraph>

          Nossos perfis são conformados a frio, a partir de blanks de aço, sendo material classificado ou não.
Com equipamentos de ponta, torna possível atender com excelência em qualidade a necessidade de cada cliente / projeto, essa nossa expertise em fabricação vem garantindo ao longo dos anos satisfação absoluta nos mais respeitados seguimentos, seja ele engenharia, arquitetura, maquinário, estruturista.

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

export default PerfisEspeciais
