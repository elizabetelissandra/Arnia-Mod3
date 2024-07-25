import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const DivCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 150px;
    background-color: #eaeaea;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin: 10px;
    padding: 10px;
`

export const H3Category = styled.h3`
    color: #928e9a;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 10px;
`

export const H3Name = styled.h3`
    color: #2e195c;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 10px;
`

export const PDescription = styled.p`
    color: #928e9a;
    font-size: 15px;
    padding: 5px;
    margin-left: 10px;
`

export const PPrice = styled.p`
    color: #C47F17;
    font-size: 15px;
    padding: 5px;
    margin-left: 10px;
`

export const SpanPrice = styled.span`
    color: #C47F17;
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
    margin-left: 10px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
`