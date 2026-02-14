
import React from 'react';
import styled from 'styled-components';

export const Menu = (props: { menuItems: Array<string> }) => {
    return <StyledMenu>
        <ul>
            {props.menuItems.map((item, id) => (
                <li key={id}>
                <a href="">{item}</a>
            </li>
            )  
            )}
        </ul>
    </StyledMenu>
};

const StyledMenu = styled.nav`
    align-items: center;
    ul{
    display: flex;
    gap: 30px;
    list-style: none;
    }
`