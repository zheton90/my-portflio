
import { FC } from 'react';
import { Icon } from '../../../../componets/icon/Icon';
import { S } from ".././Skills_Styles"

type SkillPropsType = {
    iconId: string,
    title: string,
}

export const Skill: FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width='120' height='120' viewBox='0 0 120 116' />
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    );
};

