import React from 'react';
import { SectionTitle } from '../../../componets/SectionTitle';
import styled from 'styled-components';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Project } from './project/Project';
import projectImg from '../../../assets/images/ProjectImage.png'
import {Container} from "../../../componets/Container";
import {Theme} from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects>

            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap='wrap' gap='42px 26px '>
                    <Project
                        titel={'TITLE PROJECT'}
                        description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        src={projectImg}/>
                    <Project
                        titel={'I N S I G H T G R A M'}
                        description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        src={projectImg}/>
                    <Project
                        titel={'TITLE PROJECT'}
                        description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        src={projectImg}/>
                    <Project
                        titel={'I N S I G H T G R A M'}
                        description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        src={projectImg}/>

                </FlexWrapper>
            </Container>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
background-color: ${Theme.colors.lightBg};

`
