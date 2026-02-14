import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../componets/FlexWrapper"
import { font } from "../../../styles/Common"

const Skills = styled.section`
        position: relative;

       @media ${Theme.media.mobile} {
         
     ${FlexWrapper}{
        gap: 80px 50px;
     }
 }
`

const Skill = styled.div`
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

        @media ${Theme.media.mobile} {      
        width: 90px;
        ${font({ weight: 400, Fmax: 16, Fmin: 12 })}           
        
    }

`


export const S = {
    Skills,
    Skill,
    SkillTitle,
}