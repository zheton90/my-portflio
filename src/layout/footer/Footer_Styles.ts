import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
    position: relative;
    background-color: ${Theme.colors.lightBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 73px;
    list-style: none;
    margin-bottom: 49px;
`

const SocialItem = styled.li` 
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column;    
    height: 60px;   
    align-items: center;
    
    svg{
        background-color: ${Theme.colors.buttonBg};
        border-radius: 50%;
        color:${Theme.colors.buttonColor};

        &:hover{
        color: ${Theme.colors.font}
        
        }
    }
`

const SocialName = styled.h5`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 12px;
    line-height: 93%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: #1f2626;
    margin: 0;
`

const Copyright = styled.small`
    margin-top: 49px;
    font-weight: 400;
    font-size: 14px;
    line-height: 186%;
    letter-spacing: 0.04em;
    text-align: center;
    color: #1f2626;
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    SocialName,
    Copyright,
}