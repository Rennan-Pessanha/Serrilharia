import React from 'react'
import * as C from './styles.js'

export const Footer = () => {
  return (
    <>
      <C.FooterPerfil>
        <C.FooterContentWrapper>
      <C.PerfisWrapper>
        <C.PerfisContents>
            <C.PerfilImage src="./Imagem/Icons/Group.svg" alt="Imagem do perfil" />
            <C.PerfilContentTitle>Atendimento</C.PerfilContentTitle>
            <C.PerfilDescription>Relacionamento com o cliente é o nosso principal pilar.</C.PerfilDescription>
        </C.PerfisContents>
          <C.PerfisContents>
            <C.PerfilImage src="./Imagem/Icons/Estrela.svg" alt="Imagem do perfil" />
            <C.PerfilContentTitle>Qualidade</C.PerfilContentTitle>
            <C.PerfilDescription>Silaços é reconhecida por sua agilidade na entrega de produtos sob medida.</C.PerfilDescription>
        </C.PerfisContents>
          <C.PerfisContents>
            <C.PerfilImage src="./Imagem/Icons/Pagamento.svg" alt="Imagem do perfil" />
            <C.PerfilContentTitle>Pagamento</C.PerfilContentTitle>
            <C.PerfilDescription>Aceitamos PIX, Cartão de crédito e Faturamento.</C.PerfilDescription>
        </C.PerfisContents>
        </C.PerfisWrapper>
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
            <C.ContactListItem>Telefone: ( 16 )   3442-8384</C.ContactListItem>
        </C.ContactList>
    </C.ContactContent>
      </C.ContentF>
      </C.FooterContentWrapper>
      </C.FooterPerfil>
    </>
  )
}

export default Footer;
