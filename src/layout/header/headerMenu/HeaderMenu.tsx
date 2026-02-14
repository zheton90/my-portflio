import { FC } from "react";
import { S } from "../Header_Styles"

type HeaderMenuPropsTypes = {
    menuItems: Array<{ title: string, href: string }>,
}

export const HeaderMenu: FC<HeaderMenuPropsTypes> = (props: HeaderMenuPropsTypes) => {
    return <S.HeaderMenu>
        <ul>
            {props.menuItems.map((item, id) => (
                <S.ListItem key={id}>
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass="active"
                        spy={true}
                    >
                        {item.title}
                    </S.NavLink>
                </S.ListItem>
            )
            )}
        </ul>
    </S.HeaderMenu>
};
