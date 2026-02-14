
import { SectionTitle } from '../../../componets/SectionTitle';
import { Button } from '../../../componets/button/Button';
import { Container } from "../../../componets/Container";
import { S } from "./Contacts_Styles"

const FieldData = [
    {
        span: 'Name',
        placeholder: 'name',
    },
    {
        span: 'Email',
        placeholder: 'Value',
    }
]

export const Contacts = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>
                    Contacts
                </SectionTitle>

                <S.StyledForm>

                    <S.FieldLabel>
                        <span>SDBDFB</span>
                        <br />
                        <S.Field placeholder="SFDBSDFB" />
                    </S.FieldLabel>

                    {FieldData.map((f, id) => (
                        <S.FieldLabel key={id}>
                            <span>{f.span}</span>
                            <br />
                            <S.Field placeholder={f.placeholder} />
                        </S.FieldLabel>
                    ))}

                    <S.FieldLabel>
                        <span>Mensaje</span>
                        <br />
                        <S.Field placeholder='Hi, i will ...' as={'textarea'} />
                    </S.FieldLabel>

                    <Button padding='15px'>Submit</Button>
                </S.StyledForm>
            </Container>

        </S.Contacts>
    );
};

