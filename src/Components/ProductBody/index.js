import React from 'react'
import * as C from './styles.js'

export const ProductBody = () => {
  return (
    <>
    <C.Container>
      
    <C.TextWrapper>
      <C.Title>Produtos</C.Title>
    </C.TextWrapper>

    <C.ProductWrapper>
          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Perfis Especiais</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton to="/PerfisEspeciais">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos/Tubular/TubularI.png" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Perfil Tubular</C.ProductTitle>
              <p>Outra descrição do produto</p>
              <C.AccessButton to="/PerfisTubular" left>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos/PerfisDePerfiladeira/Perfiladeira1.jpeg" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Perfis de Perfiladeira</C.ProductTitle>
              <p>Perfis de Perfiladeira</p>
              <C.AccessButton to="/PerfisPerfiladeira">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/conjunto 1.jpg" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Perfil Soldado</C.ProductTitle>
              <p>Perfil Soldado</p>
              <C.AccessButton to="/PerfilSoldado" left>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/Tubos6.jpeg" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Tubos Industriais</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton to="/TubosIndustriais">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/Perfillaminado1.jpeg" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Perfil Laminado</C.ProductTitle>
              <p>Perfil Laminado</p>
            <C.AccessButton left to="/Laminado">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/Telha2.jpeg" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Telhas</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton to="/Telhas">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/Parafusos.jfif" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Parafusos</C.ProductTitle>
              <p>Perfil Laminado</p>
            <C.AccessButton left to="/Parafusos">Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

        </C.ProductWrapper>

    

    </C.Container>
    
    </>
  )
}

export default ProductBody
