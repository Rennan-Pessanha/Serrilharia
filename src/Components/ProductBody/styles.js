import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 110%;
  height: auto;
  background-color: #000000;
  overflow: hidden;
  padding: 0 10px;
  padding-right: 60px;


  @media (max-width: 768px) {
    width: 150%;
    padding-right: 16px;
    padding-left: 16px;
  }

`;

export const TextWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0px;

  @media (max-width: 768px) {  
    margin-bottom: -20px;
    margin-left: -20%;
  }

  @media (max-width: 425px) {  
    margin-left: -10%;
  }

  @media (max-width: 375px) {  
    margin-left: 5%;
  }

  @media (max-width: 320px) {  
    margin-left: 10%;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 64px;
  font-weight: 800;
  color: white;

  @media (max-width: 768px) {
    font-size: 48px;
    margin-right: 10%;
  }

  @media (max-width: 384px) {
    margin-left: -8%;
  }

  @media (max-width: 375px) {
    margin-right: 34%;
  }

  @media (max-width: 360px) {
    margin-right: 30%;
  }

  @media (max-width: 320px) {
    margin-right: 50%;
  }
`;

export const ProductWrapper = styled.div`
  margin-top: 0%;
  margin-bottom: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 16%;
    margin-right: -2%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-left: -50%;
  }

  @media (max-width: 515px) {
    margin-left: -43%;
  }

  @media (max-width: 425px) {
    margin-left: -27%;
  }

  @media (max-width: 384px) {
    margin-left: -40%;
  }

  @media (max-width: 375px) {
    margin-left: -20%;
  }

  @media (max-width: 320px) {
    margin-left: -5%;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-right: 10%;
  margin-left: 10%;

  ${props =>
    props.reversed &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 4090px;
    padding: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 636px;
  height: 300px;
  border: 6px solid #C2F0FF;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 200px;
    max-width: 406px;
    height: 300px;
  }

  @media (max-width: 425px) {
    font-size: 28px;
    height: 200px;
    width: 250px;
  }

  @media (max-width: 384px) {
    font-size: 48px;
    max-width: 306px;
    margin-left: 5%;
    height: 250px;
  }

  @media (max-width: 375px) {
    font-size: 48px;
    max-width: 306px;
    height: 300px;
  }

  @media (max-width: 320px) {
    font-size: 48px;
    max-width: 206px;
    margin-left: 15%;
    height: 200px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 34px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
  `;

export const ProductTitle = styled.h2`
  font-size: 75px;
  color: #ffffff;
  margin-bottom: 10px;

  ${props =>
    props.leftT &&
    css`
      text-align: center;
      margin-left: 0;
    `}


  @media (max-width: 1090px) {
      font-size: 48px;
      margin-right: 120px
    }

  @media (max-width: 768px) {
    font-size: 48px;
    margin-right: 120px
  }

  @media (max-width: 515px) {
    font-size: 38px;
  }

  @media (max-width: 425px) {
    font-size: 28px;
  }
`;

export const AccessButton = styled(Link)`
  width: 245px;
  height: 79px;
  font-size: 36px;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #000;
  margin-top: 20px;

  ${props =>
    props.left &&
    css`
      margin-left: auto;
      margin-right: 0;
    `}

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: 24px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 425px) {
    margin-top: -0px;
    width: 150px;
    height: 60px;
  }
`;
