import React from 'react';
import styled from 'styled-components';

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

const SubTitle = styled.p`
font-size: 12px;
position: absolute;
left: 140px;
bottom: 15px;
color: gray;
`;

const Btns = styled.div`
    position: absolute;
    right: 250px;
    bottom: 5px;
    margin-bottom: 7px;
    border-bottom: 1px solid black;   
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

    &:hover {
        background-color: #808080;
        color: white;
    }

    &:active {
        background-color: #2c2c2c;
        border-color: black;
    }
`;

const Profile = styled.div`
    position: absolute;
    right: 332px;
    top: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid black;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

function MyPageHeader() {
    return (
        <StyledHeader>
            <Profile>
                <img src='data:image/jpeg;base64,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' alt="Profile" />
            </Profile>
            <Title>My Page</Title>
            <SubTitle>SubTitle Testing</SubTitle>
            <Btns>
                <Button>Home</Button>
                <Button>Logout</Button>
            </Btns>
        </StyledHeader>
    );
}

export default MyPageHeader;
