import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 110%;
  height: 140vh;
  background: url('./Imagem/SilasBackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0 20px;
  padding-right: 20px;
  padding-left: 20px;

  @media (max-width: 1415px) {
    height: 190vh;
  }

  @media (max-width: 768px) {
    height: 170vh;
  }

  @media (max-width: 425px) {
    height: 150vh;
  }

  @media (max-width: 375px) {
    height: 140vh;
  }

  @media (max-width: 320px) {
    height: 140vh;
  }
}`

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

export const NossosProdutos = styled.div`
  height: 297px;
  width: 428px;
  margin-top: 50px;
  margin-left: 141px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 80%;
    margin-top: 30px;
    align-self: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 85px;
  line-height: 104px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 64px;
    text-align: center;
  }
`;

export const SubTextContent = styled.div`
  width: 457px;
  height: 298px;
  margin-left: 141px;
  margin-top: 34px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 80%;
    margin-top: 20px;
    align-self: center;
  }
`;

export const SubText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
`;

