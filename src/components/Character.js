// Write your Character component here
import React from "react";

import styled from 'styled-components';

const Line = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px solid #fff;
    width: 50%; 
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    jusify-content: space-between;
    align-items: center;
    padding: 4px;
    text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.6);
    border-radius: 500px;
    transition: 300ms;
    :hover {
        background: green;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        width: 55%;
    }
`
const Name = styled.span`
    flex: 1;
    text-align: left;
    padding-left: 0.5em;
`
const Year = styled.span`
    background: rgba(0, 0, 0, 0.3);
    border-radius: 500px;
    padding: 0.2em 0.5em;
`

export default function Character(props) {
    return (
        <Line>
            <Name>{props.name}</Name>
            <Year>{props.birthYear}</Year>
        </Line>
    )
}