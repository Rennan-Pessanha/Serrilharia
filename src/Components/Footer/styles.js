import styled from 'styled-components';

export const FooterPerfil = styled.div`
  background-color: #242424;
  padding: 20px;
  display: block;
  width: 110%;
  padding-left: 65px;
  height: auto;
  justify-content: center;
`;

export const FooterContentWrapper = styled.div`
  width: 60%;
  margin-left: 14%;


  @media (max-width: 1400px) {

  }

  @media (max-width: 1220px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 500px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 60%;
  }

  @media (max-width: 375px) {

    margin-left: 2%;
  }
`;

export const PerfisWrapper = styled.div`
  display: flex;
  margin: 2% 0;

  @media (max-width: 1140px) {
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

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
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