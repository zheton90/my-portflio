import { FC } from 'react';
import { SectionTitle } from "../../../componets/SectionTitle";
import { Container } from "../../../componets/Container";
import {ListItem, S} from "./About_Styles"

export const About: FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle>
                    Personal Profile
                </SectionTitle>
                <S.AboutText>
<span>
    I have more than a year in non-commercial application development (pet-projects). My key
                    technical skills and experience include:
</span>
                    <ul>
                        <ListItem>Frontend Development: Proficient in creating responsive and semantically correct layouts using HTML5, CSS3, and SASS.</ListItem>
                        <ListItem>JavaScript & TypeScript: Solid foundation in modern JS (ES6+) and TypeScript, ensuring type safety and cleaner code.</ListItem>
                        <ListItem>React Ecosystem: Extensive experience building Single Page Applications (SPA) using functional components and Hooks.</ListItem>
                        <ListItem>State Management: Advanced knowledge of Redux Toolkit, including efficient data fetching and caching with RTK Query.</ListItem>
                        <ListItem>UI Libraries: Skilled in rapid UI development using component libraries like MUI (Material UI) and Bootstrap</ListItem>
                        <ListItem>Architecture & Logic:
                            <ul>
                                <ListItem>Strong understanding of SOLID principles and Object-Oriented Programming (OOP).</ListItem>
                                <ListItem>Implementation of complex Client-Server communication logic.</ListItem>
                                <ListItem>Deep understanding of Routing, including the implementation of Protected Routes and Authentication modules.</ListItem>
                            </ul>
                        
                        </ListItem>
                        <ListItem>Testing & Version Control: Experience in ensuring code quality through Unit Testing and managing collaborative development via GitHub.</ListItem>
                    </ul>

                </S.AboutText>
            </Container>
        </S.About>
    );
};

