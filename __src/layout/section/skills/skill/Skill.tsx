import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../componets/icon/Icon';
import {Theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
    title: string,


}

export const Skill = (props: SkillPropsType ) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width='120' height='120' viewBox='0 0 120 116'/>
            <SkillTitle>{props.title}</SkillTitle>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media ${Theme.media.mobile} {
        
        
        
        svg{            
            width: 90px;
            height: 90px;            
        }
    }
    
`

const SkillTitle = styled.h3`
    width: 120px;
    text-align: center;
`