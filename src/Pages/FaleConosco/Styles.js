import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #242424;
  padding: 0 20px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 769px) {
    height: auto;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 280px;
  height: 172px;
  margin: 12px 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;

export const Navs = styled(Link)`
  margin: 0 10px;
  font-family: 'Montserrat';
  font-style: normal;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  &:hover {

    transform: scale(1.2);
  }

  @media (max-width: 320px) {
    margin-top: 20px;
  }
`;

export const FormContent = styled.div`
width: 100%;
max-width: 1280px;
height: auto;
margin: 5% auto;
background-color: #000;
padding: 30px;
border-radius: 30px;

  @media (max-width: 1440px) {
    height: auto;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media (max-width: 769px) {
    margin: 5% auto;
    padding: 20px;
  }

  @media (max-width: 384px) {
    height: auto;
    width: 70%;
  }

`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 769px) {
    max-width: 800px;
  }
`;

export const WhatsAppIcon = styled.a`
  position: absolute;
  bottom: 10px; /* Adjust this value for vertical position */
  right: 10px; /* Adjust this value for horizontal position */
`;

export const WhatsAppImage = styled.img`
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const label = styled.label`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 400;
`;

export const input = styled.input`
  border-radius: 20px;
  background: #D9D9D9;
  width: 100%;
  height: 39px;
`;

export const Button = styled.button`
  background-color: #242424;
  color: #ffffff;
  width: 236px;
  height: 76px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333333;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
  padding: 0 20px;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 0;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const LogoFooter = styled.img`
  width: 475px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    margin-left: -15%;
  }
`;


export const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const CompanyTitle = styled.h3`
  color: #fff;
  font-size: 49px;
  font-family: Montserrat;
  font-weight: 800;
  margin-left: 110px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-left: 5px;
  }
`;

export const CompanyDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  font-family: Montserrat;
  margin-top: 8px;
  margin-left: 75px;

  @media (max-width: 768px) {
    font-size: 20px;
    width: 500px;
    margin-left: 5px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    width: 300px;
    margin-left: 0px;
  }
`;



export const ContactContent = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-size: 42px;
  font-family: Montserrat;
  margin-left: 120px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-left: -10px;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;

  @media (max-width: 768px) {
    font-size: 18px;
    
  }
`;

export const ContactListItem = styled.li`
  font-size: 16px;
  margin-left: 155px;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;