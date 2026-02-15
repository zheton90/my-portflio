import styled from "styled-components"
import { Theme } from "../../styles/Theme"
import { Link } from "react-scroll"

const Header = styled.header`
   background-color: ${Theme.colors.lightBg};
    opacity: 70%;
   padding: 25px 0;
   position: fixed;
   top:0;
   left: 0;
   right: 0;
   z-index: 999
`

const HeaderMenu = styled.nav`
    align-items: center;
    ul{
    display: flex;
    gap: 30px;
    list-style: none;
        
    @media ${Theme.media.mobile} {
        gap: 20px;
    }    
    }
`

const NavLink = styled(Link)`
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;

padding: 12px 20px;
border-radius: 6px;
    
&:hover, &.active {
    background-color: ${Theme.colors.buttonBg};
    color: ${Theme.colors.buttonColor};
}
`

const ListItem = styled.li`    
`
export const S = {
    Header,
    HeaderMenu,
    NavLink,
    ListItem,
}