import { SectionTitle } from '../../../componets/SectionTitle';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Project } from './project/Project';
import { Container } from "../../../componets/Container";
import { S } from "./Projects_Styles"
import superImage from '../../../assets/images/ProjectImage.png'

const ProjectData = [
    {
        titel: 'TITLE PROJECT',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        src: superImage,
        skills: ["JAVASCRIPT", "POSTGRESQL", "REACT", "REDUX"],
    },
    {
        titel: 'I N S I G H T G R A M',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        src: superImage,
        skills: ["JAVASCRIPT", "React Native", "REDUX"],
    },
    {
        titel: 'TITLE PROJECT',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        src: superImage,
        skills: ["JAVASCRIPT", "POSTGRESQL", "REACT", "REDUX"],
    },
    {
        titel: 'I N S I G H T G R A M',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        src: superImage,
        skills: ["JAVASCRIPT", "React Native", "REDUX"],
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
