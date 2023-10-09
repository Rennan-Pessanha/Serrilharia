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

          A Perfilação Contínua é o processo que permite a fabricação de vários modelos de perfis, sendo eles com aço classificado ou não, permitindo assim maior praticidade na conformação e maior rapidez de produção.
          <br /> <br />
          Nos destacamos neste processo por conta de equipamentos de ponta, onde conseguimos produzir perfis desde 2,00 mm até 8,00mm , tendo suas bases até 300mm, válido para perfil U e perfil U Enrijecido com comprimento máximo até 17,5 MTS.

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

export default PerfisDePerfiladeira
