import React from 'react'
import { HeaderBody } from '../../Components/HeaderBody'
import * as C from './Styles.js'
import Footer from '../../Components/Footer'

const renderCard = (imageSrc, altText, description) => (
    <C.Card>
      <C.CardImage src={imageSrc} alt={altText} />
      <C.CardDescription>{description}</C.CardDescription>
      <C.AccessButton to="/FaleConosco">Acessar</C.AccessButton>
    </C.Card>
  );

export const Produtos = () => {
  return (

    <div> 
    <HeaderBody /> 
    <C.Container>
    <C.ContentWrapper>

        <C.TitleWrapper>
          <C.Title>Perfil Tubular</C.Title>
        </C.TitleWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Tubular/TubularI.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularII.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularIII.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Tubular/TubularIV.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularV.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularVI.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title>Perfil Soldado</C.Title>
        </C.TitleWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Soldado/Soldado1.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado2.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado3.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Soldado/Soldado4.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado5.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado6.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title> Perfis Especiais </C.Title>
        </C.TitleWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Cartola/Cartola1.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola2.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola3.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Cartola/Cartola4.png',
          'Produto 1',
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola5.png',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola6.png',
          'Produto 3',
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title> poliestireno <br /> expandido </C.Title>
        </C.TitleWrapper>

             <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Isopor/isopor1.jpeg',
          'Produto 1',
        )}

        {renderCard(
        './Imagem/Produtos/Isopor/isopor4.jpeg',
          'Produto 2',
        )}

        {renderCard(
          './Imagem/Produtos/Isopor/isopor2.jpeg',
          'Produto 3'
        )}
            </C.CardWrapper>

    </C.ContentWrapper>
    </C.Container>
    <Footer />



    </div>
  )
}

export default Produtos
