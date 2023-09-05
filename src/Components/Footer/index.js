import React from 'react'
import * as C from './styles.js'

export const Footer = () => {
  return (
    <>
    <C.Container>
    <C.Content>
        <C.LogoContent>
            <C.Logo src="./Imagem/LogoSerralheria.png" alt="Logo da Empresa" />
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
            <C.ContactListItem>Whatsapp: +55 16 99154-7295</C.ContactListItem>
            <C.ContactListItem>Email: s.panissa@uol.com.br</C.ContactListItem>
            <C.ContactListItem>Telefone: ( 16 )   3442-8384</C.ContactListItem>
        </C.ContactList>
    </C.ContactContent>
      </C.Content>
    </C.Container>
    </>
  )
}

export default Footer;
