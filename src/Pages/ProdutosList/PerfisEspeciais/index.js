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
          Os nossos "Perfis Especiais" são produtos de aço customizados que são projetados para atender às necessidades específicas dos nossos clientes. Eles são fabricados com precisão a partir de materiais de alta qualidade e são conhecidos pela sua versatilidade e capacidade de atender a uma ampla gama de aplicações industriais e estruturais.

            <br /> <br />

          O que torna os Perfis Especiais verdadeiramente especiais é a sua capacidade de serem personalizados de acordo com as especificações únicas de cada projeto. Isso significa que podemos criar perfis com diferentes formas, tamanhos, dimensões e características para atender às demandas específicas dos nossos clientes. Seja para projetos arquitetônicos complexos, maquinaria industrial ou estruturas de suporte, nossos Perfis Especiais podem ser adaptados para se encaixar perfeitamente.
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

export default PerfisEspeciais
