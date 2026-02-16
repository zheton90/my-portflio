import { FC } from 'react';
import { S } from "../Projects_Styles"
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Button } from '../../../../componets/button/Button';


type ProjectTypeProps = {
    titel: string,
    description: string,
    src: string,
    skills: Array<string>,
    link: string | null,
}

export const Project: FC<ProjectTypeProps> = (props: ProjectTypeProps) => {
    return (
        <S.Project>
            <S.StyledImg src={props.src} alt='' />
            <S.ProjectSection>
                {props.link !== null ?
                    <S.ProjectLink href={props.link} target='_blank'>
                        <S.TitleProject>{props.titel}</S.TitleProject>
                    </S.ProjectLink> :
                    <S.TitleProject>{props.titel}</S.TitleProject>
                }
                <FlexWrapper align='center' wrap='wrap' gap='12px' >
                    {props.skills.map((s, id) => (
                        <Button key={id} transform={'uppercase'}>{s}</Button>
                    ))}
                </FlexWrapper>
                <S.TextProject>{props.description}</S.TextProject>
            </S.ProjectSection>

        </S.Project>
    );
};

