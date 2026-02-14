import styled from "styled-components"
import { Logo } from "../../componets/logo/Logo"
import { Container } from "../../componets/Container"
import { FlexWrapper } from "../../componets/FlexWrapper"
import { HeaderMenu } from "./headerMenu/HeaderMenu"
import {Theme} from "../../styles/Theme";

const itemHeader = ['Projects', 'Contact']

export const Header = () => {

    return <StyledHeader>
        <Container>
            <FlexWrapper  justify={"space-between"} align={"center"}>
                <Logo />
                <HeaderMenu menuItems={itemHeader} />
            </FlexWrapper>
        </Container>
    </StyledHeader>
}

const StyledHeader = styled.header`
   background-color: ${Theme.colors.lightBg};
    opacity: 70%;
   padding: 25px 0;
   position: fixed;
   top:0;
   left: 0;
   right: 0;
   z-index: 999
`

