import { Logo } from "../../componets/logo/Logo"
import { Container } from "../../componets/Container"
import { FlexWrapper } from "../../componets/FlexWrapper"
import { HeaderMenu } from "./headerMenu/HeaderMenu"
import { S } from "./Header_Styles"

const itemHeader = [
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contact',
        href: 'contact'
    }
]

export const Header = () => {

    return <S.Header>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo />
                <HeaderMenu menuItems={itemHeader} />
            </FlexWrapper>
        </Container>
    </S.Header>
}


