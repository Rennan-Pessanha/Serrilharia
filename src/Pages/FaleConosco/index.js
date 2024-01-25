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
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

    const dataToSend = {
        nome: formData.nome,
        email: formData.email,
        assunto: "Consulta via Formulário", // Exemplo de assunto
        pergunta: formData.cotacoes, // Usando 'cotacoes' como 'pergunta'
    };

    fetch("http://localhost:3000/FaleConosco", { // Ajuste a URL para a porta correta
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Mensagem enviada com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao enviar a mensagem.");
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
                    <C.Form onSubmit={handleSubmit}>
                        {/* Nome */}
                        <C.FormGroup>
                            <C.label htmlFor="nome">Nome:</C.label>
                            <C.input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                        </C.FormGroup>

                        {/* Email */}
                        <C.FormGroup>
                            <C.label htmlFor="email">Email:</C.label>
                            <C.input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </C.FormGroup>

                        {/* Telefone */}
                        <C.FormGroup>
                            <C.label htmlFor="telefone">Telefone:</C.label>
                            <C.input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                        </C.FormGroup>

                        {/* Cidade */}
                        <C.FormGroup>
                            <C.label htmlFor="cidade">Cidade:</C.label>
                            <C.input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
                        </C.FormGroup>

                        {/* CEP */}
                        <C.FormGroup>
                            <C.label htmlFor="cep">CEP:</C.label>
                            <C.input type="text" name="cep" value={formData.cep} onChange={handleChange} />
                        </C.FormGroup>

                        {/* Consulta */}
                        <C.FormGroup>
                            <C.label htmlFor="cotacoes">Faça sua consulta:</C.label>
                            <C.TextArea name="cotacoes" value={formData.cotacoes} onChange={handleChange} />
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
