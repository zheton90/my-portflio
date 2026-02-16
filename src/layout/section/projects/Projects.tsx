import { SectionTitle } from '../../../componets/SectionTitle';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Project } from './project/Project';
import { Container } from "../../../componets/Container";
import { S } from "./Projects_Styles"
// @ts-ignore
import superImage from '../../../assets/images/ProjectImage.png'
// @ts-ignore
import shopImage from '../../../assets/images/ShopImg.png'
// @ts-ignore
import projectImage from '../../../assets/images/ProjectImg.png'
// @ts-ignore
import todolistsImage from '../../../assets/images/TodolistsImg.png'

const ProjectData = [
    {
        titel: 'Todolists',
        description: 'A basic course project on learning React and working with servers. During the course, I managed to learn and practice all of the above technologies.',
        src: todolistsImage,
        skills: [ "REACT", "Type Script", "REDUX", 'Reducer', 'RTK Query', 'Redux Toolkit', 'MUI', 'REST API', 'React Router'],
        link: 'https://zheton90.github.io/todolistProject/',
    },
    {
        titel: 'ProjectShop',
        description: 'My first project. Completed in 2022. During the process, I learned about adaptive page layout. I gained experience in basic styling.',
        src: shopImage,
        skills: ["HTML", "CSS", "SASS"],
        link: 'https://zheton90.github.io/ProjectShop_HTML_CSS/',
    },
    {
        titel: 'My Portfolio',
        description: 'This is a portfolio project created using React and styled with styled components. Additional libraries such as React Parallax, React Scroll, and Typewriter Effect were also used during development.',
        src: projectImage,
        skills: ["Type Script", "Styled Components", "Java Script", "REACT"],
        link: 'https://zheton90.github.io/my-portflio/',
    },
    {
        titel: 'MusicFun',
        description: 'This project is currently under development. Server requests are executed using RTK query. Page styling has not yet been started.',
        src: superImage,
        skills: ["Type Script", "RTK Query", 'Figma'],
        link: null
    },

]

export const Projects = () => {
    return (
        <S.Projects id={'projects'}>

            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap='wrap' gap='42px 26px '>
                    {ProjectData.map((p, id) => (
                        <Project
                            key={id}
                            titel={p.titel}
                            description={p.description}
                            src={p.src}
                            skills={p.skills}
                            link={p.link}
                        />
                    ))}

                </FlexWrapper>
            </Container>

        </S.Projects>
    );
};
