import {FC} from "react";
import {ListItem, S} from "././Educaon_Styles";
import {Container} from "../../../componets/Container";
import {SectionTitle} from "../../../componets/SectionTitle";

export const Education: FC = () => {
    return (
        <S.Education>
            <Container>
                <SectionTitle>
                    Education
                </SectionTitle>
                <S.EducationText>

                    <ul>
                        <ListItem>Education:
                            <ul>
                                <ListItem><span>Sukhoi State Technical University of Gomel</span> <span>2008-2013</span></ListItem>

                            </ul>
                        </ListItem>
                        <ListItem>Additional education:
                            <ul>
                                <ListItem><span>GeekBrais</span> <span>2022-2023</span></ListItem>
                                <ListItem><span>it-incubator</span> <span>2025-2026</span></ListItem>
                            </ul>

                        </ListItem>
                    </ul>

                </S.EducationText>
            </Container>
        </S.Education>
    );
};