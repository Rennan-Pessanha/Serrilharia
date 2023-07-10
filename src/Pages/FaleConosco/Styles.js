import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 110%;
  height: 115vh;
  background-color: #242424;
  padding-right: 20px;
  padding-left: 20px;
  overflow-y: hidden;
  

  @media (max-width: 769px) {
    height: 235vh;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Content = styled.div`
height: 200px;
display: flex;
width: 100%;

@media (max-width: 768px) {
  height: auto;
  flex-direction: column;
}
`;

export const Logo = styled.img`
  display: inline-block;
  height: 172px;
  width: 280px;
  margin-left: 123px;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-left: 30%;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    margin-left: 18%;
  }
`;

export const NavContent = styled.div`
  margin-top: 30px;
  margin-left: 20%;
  display: flex;
  width: 431px;
  height: 23px;

  @media (max-width: 425px) {
    margin-left: 0%;
  }

  @media (max-width: 320px) {
    margin-left: 50%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 90px;
  }
`;

export const Navs = styled(Link)`

  width: 68px;
  height: 19px;
  font-family: 'Montserrat';
  font-style: normal;
  text-decoration: none;
  color: #ffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;


  flex: none;
  order: 1;
  flex-grow: 1;

  &:hover {
    color: #red;
    transform: scale(1.2); 
  }

  @media (max-width: 320px) {
    margin-top: 20px;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 656px;
  background-color: #000;
  margin: 0 auto;
  padding: 5px;
  border-radius: 30px;

  @media (max-width: 769px) {
    height: 850px;
    margin-top: 50px;
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
  height: 654px;
  width: 110%;
  background-color: #000;
  padding-right: 20px;
  padding-left: 20px;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: 750px;
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
  flex: 1;
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

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const CompanyDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  font-family: Montserrat;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
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
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
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
  color: #ffffff;
  margin-bottom: 8px;
`;
