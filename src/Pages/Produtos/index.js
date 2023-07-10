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
          'Tubular 390 x 400 x 8,00 x 7200'
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularII.png',
          'Produto 2',
          'Tubular 4,75 x 200 x 200 x 7500'
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularIII.png',
          'Produto 3',
          'Tubular 4,75 x 250 x 80 x 8000'
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Tubular/TubularIV.png',
          'Produto 1',
          'Tubular 390 x 400 x 8,00 x 7200'
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularV.png',
          'Produto 2',
          'Tubular 4,75 x 200 x 200 x 7500'
        )}

        {renderCard(
          './Imagem/Produtos/Tubular/TubularVI.png',
          'Produto 3',
          'Tubular 4,75 x 250 x 80 x 8000'
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title>Perfil Soldado</C.Title>
        </C.TitleWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Soldado/Soldado1.png',
          'Produto 1',
          'Perfil Conjunto soldado'
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado2.png',
          'Produto 2',
          'Perfil soldado com xanfro e furação'
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado3.png',
          'Produto 3',
          'Perfil soldado com sapata furação'
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Soldado/Soldado4.png',
          'Produto 1',
          'Perfil soldado com furacao'
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado5.png',
          'Produto 2',
          'Perfil soldado curvo com furação'
        )}

        {renderCard(
          './Imagem/Produtos/Soldado/Soldado6.png',
          'Produto 3',
          'Perfil soldado especial'
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title> Perfil Cartola </C.Title>
        </C.TitleWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Cartola/Cartola1.png',
          'Produto 1',
          'Especialespessura 6,35mm'
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola2.png',
          'Produto 2',
          'Perfil Especial'
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola3.png',
          'Produto 3',
          'Perfil dobrado e furado energia solar'
        )}
        </C.CardWrapper>

        <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/Cartola/Cartola4.png',
          'Produto 1',
          'Perfil 12,70 aba desigual para formar tubo'
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola5.png',
          'Produto 2',
          'perfil especial dobrado de chapa'
        )}

        {renderCard(
          './Imagem/Produtos/Cartola/Cartola6.png',
          'Produto 3',
          'Calha galvanizada 1,95 espessura x 10 metros'
        )}
        </C.CardWrapper>

        <C.TitleWrapper>
          <C.Title> Perfil U </C.Title>
        </C.TitleWrapper>

             <C.CardWrapper>
        {renderCard(
          './Imagem/Produtos/PerfilU/PerfilU1.png',
          'Produto 1',
          'Perfil ue 4,75 x 600 x 100 x 25 x 10.650'
        )}

        {renderCard(
          './Imagem/Produtos/PerfilU/PerfilU2.png',
          'Produto 2',
          'Perfil u 25,4 x 300 x 150 x 6000'
        )}

        {renderCard(
          './Imagem/Produtos/PerfilU/PerfilU3.png',
          'Produto 3',
          'Perfil cartola 6,35 x 65 x 180 x 30 x 6000S'
        )}
            </C.CardWrapper>

    </C.ContentWrapper>
    </C.Container>
    <Footer />



    </div>
  )
}

export default Produtos
