import { SectionTitle } from '../../../componets/SectionTitle';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Project } from './project/Project';
import { Container } from "../../../componets/Container";
import { S } from "./Projects_Styles"
// @ts-ignore
import superImage from '../../../assets/images/ProjectImage.png'

const ProjectData = [
    {
        titel: 'Todolists',
        description: 'A basic course project on learning React and working with servers. During the course, I managed to learn and practice all of the above technologies.',
        src: superImage,
        skills: [ "REACT", "Type Script", "REDUX", 'Reducer', 'RTK Query', 'Redux Toolkit', 'MUI', 'REST API', 'React Router'],
        link: '',
        githubLink:''
    },
    {
        titel: 'ProjectShop',
        description: 'My first project. Completed in 2022. During the process, I learned about adaptive page layout. I gained experience in basic styling.',
        src: superImage,
        skills: ["HTML", "CSS", "SASS"],
    },
    {
        titel: 'My Portfolio',
        description: 'This is a portfolio project created using React and styled with styled components. Additional libraries such as React Parallax, React Scroll, and Typewriter Effect were also used during development.',
        src: superImage,
        skills: ["Type Script", "Styled Components", "Java Script", "REACT"],
    },
    {
        titel: 'MusicFun',
        description: 'This project is currently under development. Server requests are executed using RTK query. Page styling has not yet been started.',
        src: superImage,
        skills: ["Type Script", "RTK Query", 'Figma'],
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
                            skills={p.skills} />
                    ))}

                </FlexWrapper>
            </Container>

        </S.Projects>
    );
};
