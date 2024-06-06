import React from 'react';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    height: 130px;

    `;

const Title = styled.p`
    position: absolute;
    font-size: 40px;
    left: 140px;
    font-weight: bold;
    `;

const Btns = styled.div`
    position: absolute;
    right: 300px;
   
    
    `;

const Button = styled.button`
    background-color: transparent;
    /* border: 1px solid black; */
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 3px;
    cursor: pointer;
    width: 100px;
    height: 55px;
    line-height: 60px;

    &:hover {
        background-color: #808080;
        color: white;
        
    }

    &:active {
        background-color: #2c2c2c;
        border-color: black;
    }
    `;

const HomeIcon = styled(FaHome)`
    font-size: 25px;
    top: 5px;
    position: absolute;
    left: 40px;
    cursor: pointer;
`;


const WriteHeader = () => {
    return (
        <StyledHeader>
            <Title>Write</Title>
            <Btns>
                <Button><HomeIcon />Home</Button>
            </Btns>
        </StyledHeader>
    );
}

export default WriteHeader;
