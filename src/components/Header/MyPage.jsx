import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';
import { useNavigate } from 'react-router-dom';

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

const MyPageHeader = () => {
    const { supabaseClient } = useAuth();
    const navigate = useNavigate();
    const logOut = async () => {
        const { error } = await supabaseClient.auth.signOut();
        alert('로그아웃 되었습니다');
        navigate('/login');
    };

    const getSession = async () => {
        const session = await supabaseClient.auth.getSession();
    }

    

    return (
        <StyledHeader>
            <Profile>
                <img src='' alt="Profile" />
            </Profile>
            <Title>My Page</Title>
            <SubTitle>SubTitle Testing</SubTitle>
            <Btns>
                <Button>Home</Button>
                <Button onClick={logOut}>Logout</Button>
            </Btns>
        </StyledHeader>
    );
}

export default MyPageHeader;
