import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 110%;
height: auto;
background: url('./Imagem/Background-Produtos.png') no-repeat center;
background-size: cover;;
overflow-x: hidden;
overflow-y: hidden;
padding-right: 20px;
padding-left: 20px;

@media (max-width: 1024px) {
  height: auto;
  }

@media (max-width: 768px) {
  height: auto;
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
    margin-left: 0;
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
    margin-left: 5%;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  margin-right: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 20%;
    margin-right: 200px;
  }

  @media (max-width: 384px) {
    flex-direction: column;
    margin-left: 2%;
    margin-right: 150px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  margin-right: 170px;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  

  @media (max-width: 768px) {
    width: 100%; 
}
`;

export const Image = styled.img`

width: 375px;
border: 6px solid #C2F0FF;
height: 261px;
margin-left: 29px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

@media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Montserrat;
  margin-top: 8px;
`;

export const Paragraph = styled.p`

    margin-left: 20%;
    width: 1031px;
    height: 99px;

    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 1024px) {
        margin-left: 5%;
        width: 931px;
      }

    @media (max-width: 768px) {
        margin-left: 29%;
        font-size: 24px;
        width: 331px;
      }

      @media (max-width: 514px) {
        margin-left: 2%;
      }
`;

export const AccessButtonWrapper = styled.div`
  display: flex;
  margin-left: 35%;
  margin-top: 10%;
  margin-bottom: 10%;

  @media (max-width: 1024px) {
    margin-left: 25%;
  }

  @media (max-width: 768px) {
    width: 300px;
    margin-left: 20%;
    margin-top: 25%;
    font-size: 44px;
  }

  @media (max-width: 624px) {
    width: 300px;
    margin-left: 15%;
    margin-top: 55%;
    font-size: 44px;
  }

  @media (max-width: 514px) {
    width: 300px;
    margin-left: 30%;
    margin 
  }

  @media (max-width: 425px) {
    width: 300px;
    margin-top: 25%;
    margin-left: 0%;
    margin-bottom: 10%;
  }

  @media (max-width: 375px) {
    width: 300px;
    margin-top: 10%;
    margin-left: 1%;
    margin-bottom: 10%;
  }

  @media (max-width: 375px) {
    width: 300px;
    margin-top: 20%;
    margin-left: 5%;
    margin-bottom: 10%;
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

  @media (max-width: 1024px) {
    margin-left: 25%;
  }

  @media (max-width: 768px) {
    width: 300px;
    margin-left: 30%;
    margin-top: 50%;
    font-size: 44px;
  }

  @media (max-width: 624px) {
    width: 300px;
    margin-left: 30%;
    margin-top: 55%;
    font-size: 44px;
  }

  @media (max-width: 514px) {
    width: 300px;
    margin-left: 30%;
    margin-top: 75%;
    font-size: 44px;
  }
  
  @media (max-width: 400px) {
    margin-top: 95%;
    margin-left: 3%;
  }
`;