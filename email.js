const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'centraldevagasvincitvagas@gmail.com',
    pass: 'aiwu ogim zypj bajs'
  }
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, pergunta } = req.body;

  const sendEmail = () => {
    const mailOptions = {
      from: 'centraldevagasvincitvagas@gmail.com',
      to: 'centraldevagasvincitvagas@gmail.com',
      subject: `Assunto: ${assunto}`,
      text: `Nome: ${nome}\nEmail: ${email}\nPergunta: ${pergunta}`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar o email:', error);
        res.status(500).send('Erro ao enviar o email.');
      } else {
        console.log('Email enviado com sucesso:', info.response);
        res.status(200).send('Email enviado com sucesso!');
      }
    });
  };

  sendEmail();
});

app.listen(3001, () => {
  console.log('Serviço de email rodando na porta 3001.');
});
