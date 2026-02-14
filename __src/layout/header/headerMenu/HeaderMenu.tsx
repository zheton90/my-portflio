import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return <StyledHeaderMenu>
        <ul>
            {props.menuItems.map((item, id) => (
                <ListItem key={id}>
                    <Link href="">
                        {item}
                    </Link>
                </ListItem>
            )
            )}
        </ul>
    </StyledHeaderMenu>
};


const StyledHeaderMenu = styled.nav`
    align-items: center;
    ul{
    display: flex;
    gap: 30px;
    list-style: none;
        
    @media ${Theme.media.mobile} {
        gap: 20px;
    }    
    }
`

const Link = styled.a`
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;

    padding: 12px 20px;
    border-radius: 6px;
    
    &:hover {
        background-color: ${Theme.colors.buttonBg};
        color: ${Theme.colors.buttonColor};
    }
`

const ListItem = styled.li`

    
`