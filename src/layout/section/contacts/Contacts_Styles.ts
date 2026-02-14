import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const Contacts = styled.section`
    position: relative;
    background-color: ${Theme.colors.lightBg};
    margin: 140px 0 190px;  
    width: 100%;

    @media ${Theme.media.mobile}{
    margin: 100px 0 150px;
    }
    
`

const FieldLabel = styled.label`
    span{
        line-height: 43px;
        
    }
`

const Field = styled.input`
    width: 100%;
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


export const S = {
    Contacts,
    FieldLabel,
    Field,
    StyledForm,

} 