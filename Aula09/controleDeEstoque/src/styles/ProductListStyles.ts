import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    background-color: #8C5E4D;
`;

export const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: #D9D9D9
`
export const DivList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    
`;



export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    padding: 0;
    background-color: #BF907E;
`