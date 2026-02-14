import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const About = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 211px;
    
    @media ${Theme.media.tablet} {
        margin-top: 72px;
    }
`

const AboutText = styled.p`
    max-width: 865px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${Theme.colors.font};
    position: relative;
    z-index:0;
    
    &::before {
        content: '';
        display: inline-block;
        height: 60px;
        width: 5px;
        border-radius: 2px;
        background-color: ${Theme.colors.buttonBg};
        position: absolute;
        left: -17px;
        z-index: -1;
    }
`

export const S = {
    About,
    AboutText,
}

export const List = styled.ul`
margin: 20px 0 0 20px;
`

export const ListItem = styled.li`
list-style-type: disc;
    margin-left: 40px;
`