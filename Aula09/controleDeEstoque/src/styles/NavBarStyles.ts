import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: #8C5E4D;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 20px;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    margin: 35px auto;
    gap: 350px;
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

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #D9D9D9;

    &:hover {   
        text-decoration: underline;
    }
`