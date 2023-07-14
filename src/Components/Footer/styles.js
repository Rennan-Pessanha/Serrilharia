import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 120%;
  height: auto;
  background-color: #242424;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 20px;
  padding-right: 50px;
  margin-left: -20px; /* Adicione esta linha */

  @media (max-width: 1024px) {

  }

  @media (max-width: 768px) {
    padding-bottom: 40px;
    padding-right: 120px;
    width: 140%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1187px) {
    flex-direction: column;
    
  }


  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`

export const LogoContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
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

  @media (max-width: 1187px) {
    width: 800px;
    
  }

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