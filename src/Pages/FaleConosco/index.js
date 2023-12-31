import React, { useState } from "react";
import * as C from './Styles.js'
import Footer from '../../Components/Footer/index.js';
import { Link } from 'react-router-dom';

export const FaleConosco = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cidade: "",
        cotacoes: "",
        telefone: "",
        cep: "",
        mensagem: "" // Adicione um campo para a mensagem
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Envie os dados do formulário para o back-end
        fetch("/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data); // Exibe uma mensagem de sucesso ou erro
          })
          .catch((error) => {
            console.error("Erro ao enviar o formulário:", error);
          });
      };

      
  return (
  <div>
    <C.Container>
        <C.Content>
        <Link to="/">
          <C.Logo src='./Imagem/LogoSerralheria.png' />
        </Link>

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
                    <C.label htmlFor="telefone">Telefone:</C.label>
                    <C.input type="tel" id="telefone" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="cidade">Cidade:</C.label>
                    <C.input type="text" id="cidade" />
                </C.FormGroup>

                <C.FormGroup>
                    <C.label htmlFor="cep">CEP:</C.label>
                    <C.input type="text" id="cep" />
                </C.FormGroup>

                <C.FormGroup>
                  <C.label htmlFor="cotacoes">Faça sua consulta:</C.label>
                  <C.TextArea id="cotacoes" />
                </C.FormGroup>

                <C.Button type="submit">Enviar</C.Button>

                <C.WhatsAppWrapper>
                <C.WhatsAppText>Ou entre em contato por WhatsApp:</C.WhatsAppText>
                <C.WhatsAppIcon href="https://wa.me/16991547295">
                  <C.WhatsAppImage src={'./Imagem/Zap.svg'} alt="WhatsApp" />
                </C.WhatsAppIcon>
                </C.WhatsAppWrapper>
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
            <C.ContactListItem>Whatsapp: +55 16 99154-7295</C.ContactListItem>
            <C.ContactListItem>Email: s.panissa@uol.com.br</C.ContactListItem>
            <C.ContactListItem>Telefone: ( 16 )   3442-8384</C.ContactListItem>
        </C.ContactList>
    </C.ContactContent>
      </C.ContentFooter>
    </C.ContainerFooter>
  </div>
  )
}

export default FaleConosco;
