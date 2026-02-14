import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../componets/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>
                    About me
                </SectionTitle>
                <StyledAboutText>
                    The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.
                </StyledAboutText>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 211px;
    
    @media ${Theme.media.tablet} {
        margin-top: 72px;
    }
`

const StyledAboutText = styled.p`
    max-width: 865px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${Theme.colors.font};
    position: relative;
    z-index:0;
    
    &::before {
        content: '';
        display: inline-block;
        height: 116px;
        width: 5px;
        border-radius: 2px;
        background-color: ${Theme.colors.buttonBg};
        position: absolute;
        left: -17px;
        z-index: -1;
    }
`