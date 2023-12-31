import styled from "styled-components";
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

export const ContentWrapper = styled.div`
  width: 80%;
  margin-left: 5%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-left: -5%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 2%;
  }

  @media (max-width: 425px) {
    margin-left: 5%;
    width: 80%;
  }
`;

export const Title = styled.h2`
  color: #fff;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 64px;
  font-family: Montserrat;
  font-weight: 800;

  @media (max-width: 384px) {
    font-size: 44px;
    margin-right: 15%;
  }

`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  @media (max-width: 768px) {
    margin-left: -5%;
  }
`;

export const CardImage = styled.img`
  width: 60%;
  height: 200px;
  border: 6px solid #C2F0FF;

  @media (max-width: 768px) {
    width: 55%;
  }

  @media (max-width: 425px) {
    margin-left: -5%;
  }
`;

export const CardDescription = styled.p`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 500;

  @media (max-width: 520px) {
    width: 50%;
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

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 520px) {
    margin-bottom: 10%;
  }

  @media (max-width: 375px) {
    width: 50%;
  }
`;
