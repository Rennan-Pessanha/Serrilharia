import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: url('./Imagem/SilasBackground.png') no-repeat center;
  background-size: cover;
  width: 110%;
  height: auto;
  background-color: #000000;
  overflow: hidden;
  padding: 0 10px;
  padding-right: 65px;


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
    margin-left: -33%;
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
    margin-left: -33%;
  }

  @media (max-width: 425px) {
    margin-left: 30%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 35%;

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
    margin-left: 55%;
    margin-bottom: 140px;


    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
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



export const PerfilTitle = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const PerfilContent = styled.div`
  margin-top: 50px;
  margin-left: 10.7%;
  margin-right: auto;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-left: 8%;
    width: 550px;
    margin-top: 10%;
  }

  @media (max-width: 667px) {
    margin-left: 2%;
    width: 450px;
    margin-top: 10%;
  }

  @media (max-width: 465px) {
    margin-left: 1%;
    width: 340px;
    margin-top: 10%;
  }

  @media (max-width: 425px) {
    margin-left: 1%;
    width: 340px;
  }

  @media (max-width: 375px) {
    margin-left: 10%;
    width: 240px;
  }

  @media (max-width: 320px) {
    margin-left: 10%;
    width: 240px;
  }
`;

export const Perfilh3 = styled.h3`
  color: #FFF;
  font-size: 24px;
  font-weight: 800;
  font-family: Montserrat;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const PerfilText = styled.p`
  color: #FFF;
  font-size: 19px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const CompanyContent = styled.div`
  margin-top: 5%;
  text-align: center;
  margin-left: -20%;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    margin-left: -35%;
  }

  @media (max-width: 425px) {
    margin-top: 10%;
  }

  @media (max-width: 320px) {
    margin-left: -42%;
  }
`;

export const History = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 425px) {
    max-width: 400px;
  }

  @media (max-width: 384px) {
    max-width: 320px;
  }

  @media (max-width: 360px) {
    max-width: 354px;
  }

  @media (max-width: 320px) {
    max-width: 310px;
  }
`;

export const Textp = styled.p`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const FooterPerfil = styled.div`
  background-color: #242424;
  padding: 20px;
  display: block;
  width: 100%;
  padding-left: 65px;
  height: auto;
  justify-content: center;
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: 5%;

  @media (max-width: 768px) {
    margin-left: -5%;
  }

  @media (max-width: 425px) {
    margin-left: -10%;
  }
`;

export const PerfisWrapper = styled.div`
  display: flex;
  margin: 2% 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PerfisContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const PerfilImage = styled.img`
  width: 94.494px;
  height: 94.494px;
`;

export const PerfilContentTitle = styled.h3`
  margin-top: 10px;
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const PerfilDescription = styled.p`
  margin-top: 5px;
  color: #FFF;
  font-size: 17px;
  font-family: Montserrat;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 200px;
  }
`;


export const ContentF = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const LogoF = styled.img`
  width: 100%;
  max-width: 475px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-left: -15%;
  }
`;

export const CompanyFContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 0;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 10%;
  }
`;

export const CompanyTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 800;

  @media (max-width: 320px) {
    width: 300px;
    margin-right: -80px;
  }
`;

export const CompanyDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  font-family: Montserrat;
  margin-top: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 300px;
    margin-right: 5px;
  }

  @media (max-width: 320px) {
    width: 300px;
    margin-right: 50px;
  }
`;

export const ContactContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 20px;
    margin-right: 60px;
  }
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 800;
`;

export const ContactList = styled.ul`
  list-style: none;
  font-size: 2vw;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 3vw;
  font-family: Montserrat;

  @media (max-width: 768px) {
  }
`;

export const ContactListItem = styled.li`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
  }
`;