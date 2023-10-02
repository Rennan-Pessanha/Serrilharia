import React from 'react'
import * as C from './styles.js'

export const Footer = () => {
  return (
    <>
      <C.FooterPerfil>
        <C.FooterContentWrapper>
      <C.ContentF>
        <C.LogoContent>
            <C.LogoF src="./Imagem/LogoSerralheria.png" alt="Logo da Empresa" />
        </C.LogoContent>
    <C.CompanyFContent>
        <C.CompanyTitle>Sobre a Empresa</C.CompanyTitle>
        <C.CompanyDescription>
        A Silaços trabalha com os principais fabricantes e distribuidores de produtos para estrutura metálica do mercado, oferecendo diversas opções para atender prontamente às suas necessidades. Com isso, podemos otimizar o seu tempo e fornecer acesso aos melhores valores do mercado.
         </C.CompanyDescription>
    </C.CompanyFContent>
    <C.ContactContent>
        <C.ContactTitle>Contato</C.ContactTitle>
        <C.ContactList>
            <C.ContactListItem>Whatsapp: +55 16 99154-7295 </C.ContactListItem>
            <C.ContactListItem>Email: s.panissa@uol.com.br</C.ContactListItem>
            <C.ContactListItem>Telefone: (16) 99154-7295</C.ContactListItem>
        </C.ContactList>
    </C.ContactContent>
      </C.ContentF>
      </C.FooterContentWrapper>
      </C.FooterPerfil>
    </>
  )
}

export default Footer;
