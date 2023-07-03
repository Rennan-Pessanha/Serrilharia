import React from 'react'
import * as C from './Styles.js'
import Footer from '../../Components/Footer/index.js';
import { Link } from 'react-router-dom';

export const FaleConosco = () => {
  return (
  <div>
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

        <C.FormContent>

                <C.TitleWrapper>
                    <C.Title>Fale Conosco</C.Title>
                </C.TitleWrapper>
            <C.FormWrapper>
            <C.Form>
                <C.FormGroup>
                    <C.label htmlFor="nome">Nome:</C.label>
                    <C.input type="text" id="nome" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="email">Email:</C.label>
                    <C.input type="email" id="email" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="cidade">Cidade:</C.label>
                    <C.input type="text" id="cidade" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="cotacoes">Faça Cotações:</C.label>
                    <C.input type="text" id="cotacoes" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="sobrenome">Sobrenome:</C.label>
                    <C.input type="text" id="sobrenome" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="telefone">Telefone:</C.label>
                    <C.input type="tel" id="telefone" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="cep">CEP:</C.label>
                    <C.input type="text" id="cep" />
                </C.FormGroup>

                <C.Button type="submit">Enviar</C.Button>
            </C.Form>
    </C.FormWrapper>

        </C.FormContent>
    </C.Container>
    
    <C.ContainerFooter>
    <C.ContentFooter>
        <C.LogoContent>
            <C.LogoFooter src="./Imagem/LogoSerralheria.png" alt="Logo da Empresa" />
        </C.LogoContent>
    <C.CompanyContent>
        <C.CompanyTitle>Sobre a Empresa</C.CompanyTitle>
        <C.CompanyDescription>
        A Silaços trabalha com os principais fabricantes e distribuidores de produtos para estrutura metálica do mercado, oferecendo diversas opções para atender prontamente às suas necessidades. Com isso, podemos otimizar o seu tempo e fornecer acesso aos melhores valores do mercado.
         </C.CompanyDescription>
    </C.CompanyContent>
    <C.ContactContent>
        <C.ContactTitle>Contato</C.ContactTitle>
        <C.ContactList>
            <C.ContactListItem>Whatsapp:</C.ContactListItem>
            <C.ContactListItem>Email:</C.ContactListItem>
            <C.ContactListItem>Telefone:</C.ContactListItem>
            <C.ContactListItem>Fale Conosco:</C.ContactListItem>
        </C.ContactList>
    </C.ContactContent>
      </C.ContentFooter>
    </C.ContainerFooter>
  </div>
  )
}

export default FaleConosco;
