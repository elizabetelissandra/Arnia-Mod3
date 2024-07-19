import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #8C5E4D;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

export const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: #151F30;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 20px;
    font-size: 20px;
    margin-bottom: 20px;
    color: #D9D9D9;
    list-style-type: none;
`

export const Li = styled.li`
    font-size: 20px;
    margin-bottom: 20px;
    color: #D9D9D9;
`
export const Description = styled.p`
  font-size: 1.1em;
  color: #fff;
  max-width: 600px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Summary = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 80%;
  margin-bottom: 30px;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #444;
`;

export const SummaryItem = styled.p`
  font-size: 1.1em;
  margin: 5px 0;
  color: #555;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #D9D9D9;

    &:hover {
        text-decoration: underline;
    }
`