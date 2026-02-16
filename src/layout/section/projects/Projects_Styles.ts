import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const Projects = styled.section`
background-color: ${Theme.colors.lightBg};
position: relative;

`

const Project = styled.div`
    display: flex;    
    flex-direction: column;
    width: 350px;
    flex-grow: 1;
    
`

const StyledImg = styled.img`
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`

const ProjectSection = styled.div`
    background-color: #F5F2FD;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    //max-width: 400px;
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
    margin: 10px;
`

const ProjectLink = styled.a`
    font-weight: 400;
    font-size: 12px;
    line-height: 93%;
    letter-spacing: 0.12em;
    text-align: center;
    color: #1f2626;
    margin: 10px;
`


export const S = {
    Projects,
    Project,
    StyledImg,
    ProjectSection,
    TitleProject,
    TextProject,
    ProjectLink,
}