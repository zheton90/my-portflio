import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../componets/SectionTitle';
import { Button } from '../../../componets/button/Button';
import {Container} from "../../../componets/Container";
import { Theme } from '../../../styles/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>
                    Contacts
                </SectionTitle>

                <StyledForm>

                    <Field placeholder='name'/>
                    <Field placeholder='secondname'/>
                    <Field placeholder='messages' as={'textarea'} />
                    <Button padding='15px'>Submit</Button>

                </StyledForm>
            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: ${Theme.colors.lightBg};
    margin: 140px 0 190px;  
    width: 100%;
    
`

const Field = styled.input`
      
      border-radius: 6px;
        border-color: ${Theme.colors.borderColor};
      padding: 14px 19px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #1f2626;
    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:hover {
        border-color: ${Theme.colors.borderColorHover};
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.borderColorHover};
    }
    
   `

const StyledForm = styled.form`
    max-width: 532px;
    display: flex;
    flex-direction: column;
    gap: 48px;    
    margin: auto;

    textarea {
        min-height: 165px;
        resize: none;
    }
`
