import { FC } from 'react';
import styled from 'styled-components';

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu: FC<MenuPropsType> = (props: MenuPropsType) => {
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