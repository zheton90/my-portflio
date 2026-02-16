import styled from "styled-components"
import { FlexWrapper } from "../../../componets/FlexWrapper"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"


const Main = styled.section`
    display: flex;    
    background-color: ${Theme.colors.lightBg};
    margin-top: 139px;
`

const MainInfo = styled.div`
    width: 520px;
    
    @media ${Theme.media.tablet} {
        padding: 0 42px;
        
        ${FlexWrapper}{
            align-items: center;
        }
    }
    `

const Photo = styled.img`
    height: 520px;
    width: 533px;
    object-fit: cover;
    
    @media ${Theme.media.tablet} {
        min-width: 330px;
        width: 100%;
        @media ${Theme.media.tablet} {
            padding: 0 42px;
        }
        
    }
`

const MainHeader = styled.h1`
    ${font({ family: "'Tinos', sans-serif", weight: 400, Fmax: 20, Fmin: 16 })}       
    color: #151717;
    
    p{
    display: none;
    };
    
    @media ${Theme.media.tablet} {
        margin-top: 64px;
    }
`
const Name = styled.h2`
    ${font({ weight: 600, Fmax: 72, Fmin: 40 })}
    margin: 10px 0;
    color: #5222d0;
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #1f2626;
`

const Button = styled.button`
    height: 44px;
    width: 134px;
    background-color: ${Theme.colors.buttonBg};
    color: ${Theme.colors.buttonColor};
    border-radius: 6px;
    margin-top: 29px;
    cursor: pointer;
`

export const S = {
    Main,
    MainInfo,
    Photo,
    MainHeader,
    Name,
    SmallText,
    Button,
}