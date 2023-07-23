import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: url('./Imagem/SilasBackground.png') no-repeat center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  padding: 0 10px;
  padding-right: 65px;

  @media (max-width: 768px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 172px;
  width: 280px;
  margin: 12px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Navs = styled(Link)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: #ffff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2); 
  }

  @media (max-width: 768px) {
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
    margin-left: 5%;
    margin-top: 12%;
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
    font-size: 2.7vw;
  }
`;

export const CompanyContent = styled.div`
  margin-top: 5%;
  text-align: center;
  margin-left: -5%;
  margin-bottom: 10%;

  @media (max-width: 425px) {
    margin-top: 10%;
  }
`;

export const History = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 384px) {
    max-width: 370px;
  }

  @media (max-width: 360px) {
    max-width: 354px;
  }

  @media (max-width: 320px) {
    max-width: 314px;
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
  width: 100%;
  background-color: #242424;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const PerfisWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PerfisContents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const PerfilImage = styled.img`
  width: 94.494px;
  height: 94.494px;
`;

export const PerfilContentTitle = styled.h3`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const PerfilDescription = styled.p`
  color: #FFF;
  font-size: 17px;
  font-family: Montserrat;
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
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const CompanyTitle = styled.h3`
  color: #fff;
  font-size: 5vw;
  font-family: Montserrat;
  font-weight: 800;
`;

export const CompanyDescription = styled.p`
  font-size: 3vw;
  font-weight: 400;
  color: #ffffff;
  font-family: Montserrat;
  margin-top: 8px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 4vw;
  }
`;

export const ContactContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-size: 5vw;
  font-family: Montserrat;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3.5vw;
    margin-left: -10px;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 3vw;
  font-family: Montserrat;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`;

export const ContactListItem = styled.li`
  font-size: 2.5vw;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;
