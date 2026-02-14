import { FC } from 'react';
import mainPhoto from '../../../assets/images/mainWithoutFon2.jpg'
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { Container } from '../../../componets/Container';
import { S } from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';

export const Main: FC = () => {
    return <S.Main>

        <Container>
            <FlexWrapper align='center' justify='space-around' wrap='wrap-reverse'>
                <S.MainInfo>
                    <FlexWrapper direction='column' align='start'>
                        <S.MainHeader>
                            <p>DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['FRONTEND DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </S.MainHeader>

                        <S.Name>NIKOLENKO YAUHENI</S.Name>
                        <S.SmallText>
                            I am a passionate and ambitious programmer who is eager to learn new skills and technologies.
                            I am looking for an opportunity to join a team where I can apply my programming skills and
                            contribute to its success.
                        </S.SmallText>
                        <S.Button>Contact Me</S.Button>
                    </FlexWrapper>
                </S.MainInfo>
                <Tilt>
                    <S.Photo src={mainPhoto} alt='' />
                </Tilt>
            </FlexWrapper>


        </Container>
    </S.Main>

};

const Arrow = styled.a`

`
