import { Icon } from '../../componets/icon/Icon';
import { Menu } from '../../componets/menu/Menu';
import { S } from "./Footer_Styles"

const itemFooter = ['Projects', 'Contact']

const SocialItemsDate = [
    {
        iconId: 'GMAIL',
        viewBox: '-9 -9 40 40'
    },
    {
        iconId: 'LINKEDIN',
        viewBox: '-9 -9 40 40',
    },
    {
        iconId: 'GITHUB',
        viewBox: '-1 -1 40 40',
    },

]

export const Footer = () => {
    return (
        <S.Footer>
            <S.SocialList>
                {SocialItemsDate.map((s, id) => (
                    <S.SocialItem key={id}>
                        <S.SocialLink>
                            <Icon
                                width='38'
                                height='38'
                                viewBox={s.viewBox}
                                iconId={s.iconId}
                            />
                            <S.SocialName>
                                <span>{s.iconId}</span>
                            </S.SocialName>
                        </S.SocialLink>
                    </S.SocialItem>
                ))}
            </S.SocialList>

            <Menu menuItems={itemFooter} />
            <S.Copyright>WEB DEVELOPER 2021</S.Copyright>

        </S.Footer>
    );
};

