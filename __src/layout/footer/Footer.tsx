import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componets/icon/Icon';
import { Menu } from '../../componets/menu/Menu';
import {Theme} from "../../styles/Theme";

const itemFooter = ['Projects', 'Contact']


export const Footer = () => {
    return (
        <StyledFooter>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon
                            width='38'
                            height='38'
                            viewBox='-9 -9 40 40'
                            iconId='GMAIL'
                            />
                        <SocialName>
                            <span>GMAIL</span>
                        </SocialName>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon
                            width='38'
                            height='38'
                            viewBox='-9 -9 40 40'
                            iconId='LINKEDIN'
                            />
                        <SocialName>
                            LINKEDIN
                        </SocialName>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon
                            width='38'
                            height='38'
                            viewBox='-9 -9 40 40'
                            iconId='GITHUB'
                            />
                        <SocialName>GITHUB</SocialName>
                    </SocialLink>
                </SocialItem>

            </SocialList>

            <Menu menuItems = {itemFooter}/>
            <Copyright>WEB DEVELOPER 2021</Copyright>
            
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.lightBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 73px;
    list-style: none;
    margin-bottom: 49px;
`

const SocialItem = styled.li`
   
    
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column-reverse;    
    height: 60px;   
    align-items: center;
    
    svg{
        background-color: ${Theme.colors.buttonBg};
        border-radius: 50%;
    }
`

const SocialName = styled.h5`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 12px;
    line-height: 93%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: #1f2626;

`

const Copyright = styled.small`
    margin-top: 49px;
    font-weight: 400;
    font-size: 14px;
    line-height: 186%;
    letter-spacing: 0.04em;
    text-align: center;
    color: #1f2626;
`