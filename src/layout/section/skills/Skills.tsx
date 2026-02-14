import { FC } from 'react';
import { SectionTitle } from '../../../componets/SectionTitle';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Skill } from './skill/Skill';
import { Container } from "../../../componets/Container";
import { S } from "./Skills_Styles"

const skillDate = [
    {
        iconId: 'JAVASCRIPT',
        title: 'JAVASCRIPT'
    },
    {
        iconId: 'TYPESCRIPT',
        title: 'TYPESCRIPT'
    },
    {
        iconId: 'MONGODB',
        title: 'MONGODB'
    },
    {
        iconId: 'POSTGRESTQL',
        title: 'POSTGRESTQL'
    },
    {
        iconId: 'JEST',
        title: 'JEST'
    },
    {
        iconId: 'EXPRESSJS',
        title: 'EXPRESSJS'
    },
    {
        iconId: 'NESTJS',
        title: 'NESTJS'
    },
    {
        iconId: 'DOCKER',
        title: 'DOCKER'
    },
    {
        iconId: 'REACT',
        title: 'REACT'
    },
    {
        iconId: 'RECTNATIVE',
        title: 'RECTNATIVE'
    },
    {
        iconId: 'REDUX',
        title: 'REDUX'
    },
    {
        iconId: 'GIT',
        title: 'GIT'
    },
    {
        iconId: 'STYLEDCOMPONENTS',
        title: 'STYLEDCOMPONENTS'
    }

]


export const Skills: FC = () => {
    return (

        <S.Skills>
            <Container>
                <SectionTitle>Skill</SectionTitle>
                <FlexWrapper wrap='wrap' justify='center' gap='59px 120px'  >
                    {skillDate.map((s, id) => (
                        <Skill key={id} iconId={s.iconId} title={s.title} />
                    ))}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

