import React from 'react'
import * as C from './styles.js'
import { Link } from 'react-router-dom';

export const HeaderBody = () => {
  return (
    <C.Container>
        <C.Content>
            <C.Logo src='./Imagem/LogoSerralheria.png' />
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

        <C.NossosProdutos>
            <C.Title>
            Conheça nossos Produtos
            </C.Title>
        </C.NossosProdutos>
        <C.SubTextContent>
            <C.SubText> 
            A SILAÇO, vem ao longo de 30 anos, reunindo parceiros visando atender especificamente a necessidade de cada cliente.
            </C.SubText>
        </C.SubTextContent>
    </C.Container>
  )

}
