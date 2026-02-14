import React from 'react';
import styled from 'styled-components';
import mainPhoto from '../../../assets/images/mainPhoto.png'
import {FlexWrapper} from '../../../componets/FlexWrapper';
import {Container} from '../../../componets/Container';
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return <StyledMain>

        <Container>
            <FlexWrapper align='center' justify='space-around' wrap='wrap-reverse'>
                <MainInfo>
                    <FlexWrapper direction='column' align='start'>
                        <MainHeader>DEVELOPER</MainHeader>
                        <Name>Erica Font</Name>
                        <SmallText>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                        </SmallText>
                        <Button>Contact Me</Button>
                        <Button2>Contact Me</Button2>

                    </FlexWrapper>
                </MainInfo>

                <Photo src={mainPhoto} alt=''/>

            </FlexWrapper>

        </Container>
    </StyledMain>

};

const StyledMain = styled.section`
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
    height: 400px;
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
    ${font({family: "'Tinos', sans-serif", weight: 400, Fmax: 20, Fmin: 16})}       
    color: #151717;
    
    @media ${Theme.media.tablet} {
        margin-top: 64px;
    }
`
const Name = styled.h2`
    ${font({ weight: 600, Fmax: 72, Fmin: 40})}
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
`

const Button2 = styled.button`
    height: 44px;
    width: 134px;
    background-image: ${Theme.colors.buttonDarkGradient};
    color: ${Theme.colors.buttonDarkGradient};
    border-radius: 6px;
    margin-top: 29px;
`