import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
background: url('./Imagem/Background-Produtos.png') no-repeat center;
background-size: cover;;
width: 110%;
height: auto;
background-color: #242424;
overflow: hidden;
padding: 0 20px;
padding-right: 50px;
padding-bottom: 20px;


@media (max-width: 768px) {
  width: 150%;
  padding-right: 16px;
  padding-left: 16px;
}

`;

export const Content = styled.div`
  height: 200px;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  height: 172px;
  width: 280px;
  margin-left: 123px;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-left: -10%;
    margin-top: 20px;
  }
`;

export const NavContent = styled.div`
  margin-top: 30px;
  margin-left: 20%;
  display: flex;
  width: 431px;
  height: 23px;

  @media (max-width: 768px) {
    margin-bottom: 90px;
    margin-left: -9%;
  }

  @media (max-width: 425px) {
    margin-left: 30%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 150px;
  }

  @media (max-width: 384px) {
    margin-left: 30%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 190px;
  }

  @media (max-width: 375px) {
    margin-left: 35%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 200px;
  }

  @media (max-width: 320px) {
    margin-left: 30%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 150px;
  }
`;



export const Navs = styled(Link)`

  width: 68px;
  height: 19px;
  font-family: 'Montserrat';
  font-style: normal;
  margin-top: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  color: #ffff;


  flex: none;
  order: 1;
  flex-grow: 1;

  &:hover {
    transform: scale(1.2); 
  }

  @media (max-width: 320px) {
    margin-top: 20px;
  }
`;


export const Wrapper = styled.div`
  display: inline-block;
  margin-left: 15%;
  margin-right: 0%;

  @media (max-width: 1440px) {
    margin-left: 0%;
    margin-right: 0%;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0 15px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  margin-right: 15%;

  @media (max-width: 768px) {
    margin-right: 30%;
  }

  @media (max-width: 425px) {
    margin-right: 40%;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const ImageWrapper = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  margin-left: 40px;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 425px) {
    display: block;
    margin-right: 20%;
    margin-left: 0%;

  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border: 6px solid #C2F0FF;
  height: 300px;
  margin-left: 5%;
  margin-right: 20%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 50%;
    max-width: 100%;
    margin-left: 6%;
  }
`;

export const ImageName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Montserrat;
  margin-top: 8px;
`;

export const TextWrapper = styled.div`
  display: block;
  overflow: none;
  margin-bottom: 100px;
  width: 50%;
  height: auto;
  margin-left: 20%;

  @media (max-width: 768px) {
    margin-left: 10%;
  }


`

export const Paragraph = styled.p`

    width: 100%;
    height: 100%;

    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const AccessButtonWrapper = styled.div`
  display: block;
  margin-left: 35%;
  margin-bottom: 5%;

  @media (max-width: 1165px) {
  }

  @media (max-width: 768px) {
    margin-left: 20%;
  }


  @media (max-width: 860px) {
  }

  @media (max-width: 685px) {
    margin-left: 22%;
  }

  @media (max-width: 480px) {

    margin-left: 6%;

  }

  @media (max-width: 410px) {
    margin-left: 2%;
  }

  @media (max-width: 375px) {
    margin-left: 10%;
  }

  @media (max-width: 320px) {
    margin-left: 2%;
  }
`;

export const AccessButton = styled(Link)`
  text-decoration: none;
  background-color: #ffffff;
  color: #000;
  font-size: 64px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 24px;
  border-radius: 70px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 375px) {
    font-size: 44px;
  }

`;