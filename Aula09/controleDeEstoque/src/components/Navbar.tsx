import { Li, LinkStyled, NavBarStyled, Ul } from "../styles/NavBarStyles";

const NavBar = () => {
    return (
        <NavBarStyled>
            <Ul>
                <Li>
                    <LinkStyled to="/">Home</LinkStyled>
                </Li>
                <Li>
                    <LinkStyled to="/sobre">Sobre</LinkStyled>
                </Li>
            </Ul>
        </NavBarStyled>
    );
};

export default NavBar