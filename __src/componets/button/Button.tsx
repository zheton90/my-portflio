import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../styles/Theme";

type ButtonPropsTypes = {
    width?: string;
    height?: string;
    padding?: string;
    transform?: string;
}

export const Button = styled.button<ButtonPropsTypes>`
  
    padding: ${props => props.padding || "8px 16px"};
    text-transform: ${props => props.transform || "capitalize"};
    background-color: ${Theme.colors.buttonBg};
    color: ${Theme.colors.buttonColor}; 
    border-radius: 6px;

    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.12em;
    text-align: center;
    
`