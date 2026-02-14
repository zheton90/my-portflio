import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Button } from '../../../../componets/button/Button';



type  ProjectTypeProps = {
    titel: string,
    description: string,
    src: string,
}

export const Project = (props: ProjectTypeProps) => {
    return (
        <StyledProject>
            <StyledImg src={props.src} alt='' />


            <ProjectSection>
                <TitleProject>{props.titel}</TitleProject>
                <FlexWrapper align='center' wrap='wrap' gap='12px' >
                    <Button transform={'uppercase'}>JAVASCRIPT</Button>
                    <Button>POSTGRESQL</Button>
                    <Button>REACT</Button>
                    <Button>REDUX</Button>
                </FlexWrapper>
                <TextProject>{props.description}</TextProject>
            </ProjectSection>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;    
    flex-direction: column;
    width: 350px;
    flex-grow: 1;
    
`

const StyledImg = styled.img`
    max-height: 400px;
    width: 100%;
    object-fit: cover;
`

const ProjectSection = styled.div`
    background-color: #F5F2FD;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
`

const TitleProject = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: #151717;
    margin-bottom: 11px;
`

const TextProject = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    margin-top: 19px;
`
