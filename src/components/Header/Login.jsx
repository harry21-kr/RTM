import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageHeader from './MyPage';
import WriteHeader from './Write';

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
    font-size: 40px;
    position: absolute;
    left: 140px;
    font-weight: bold;
    `;

const SubTitle = styled.p`
    font-size: 14px;
`;

const Btns = styled.div`
    position: absolute;
    right: 250px;
    `;

const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 3px;
    cursor: pointer;
    width: 100px;

    &:hover {
        background-color: #808080;
        color: white;
        
    }

    &:active {
        background-color: #2c2c2c;
        border-color: black;
        
    }
    `;
const LoginHeader = () => {


    return (
        <>
            <StyledHeader>
                <Title>Login</Title>
            </StyledHeader>

        </>
    );
}

export default LoginHeader;
