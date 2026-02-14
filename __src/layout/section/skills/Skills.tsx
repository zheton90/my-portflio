import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../componets/SectionTitle';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Skill } from './skill/Skill';
import {Container} from "../../../componets/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        
        <StyledSkills>

            <Container>
                <SectionTitle>Skill</SectionTitle>

                <FlexWrapper wrap='wrap' justify='center' gap='59px 120px'  >
                    <Skill iconId='JAVASCRIPT' title='JAVASCRIPT'/>
                    <Skill iconId='TYPESCRIPT' title='TYPESCRIPT'/>
                    <Skill iconId='MONGODB' title='MONGODB'/>
                    <Skill iconId='POSTGRESTQL' title='POSTGRESTQL'/>
                    <Skill iconId='JEST' title='JEST'/>
                    <Skill iconId='EXPRESSJS' title='EXPRESSJS'/>
                    <Skill iconId='NESTJS' title='NESTJS'/>
                    <Skill iconId='DOCKER' title='DOCKER'/>
                    <Skill iconId='REACT' title='REACT'/>
                    <Skill iconId='RECTNATIVE' title='RECTNATIVE'/>
                    <Skill iconId='REDUX' title='REDUX'/>
                    <Skill iconId='GIT' title='GIT'/>
                    <Skill iconId='STYLEDCOMPONENTS' title='STYLEDCOMPONENTS'/>
                </FlexWrapper>

            </Container>
            
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
      
`

