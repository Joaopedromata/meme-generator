import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`;



export const Card = styled.div`
    background: #FFF;
    width: 550px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0 ,0.2);

    h2 {
        font-size:22px;
        color: #392D2D;
        margin-bottom: 10px;
    }
`;

export const Templates = styled.div`
    width: 100%;
    height: 140px;
    background-color: #eee;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;


    button {
        background-color: transparent;
        margin-right: 10px;
        border: 2px solid transparent;

        &.selected {
            border-color: #4395D8;
        }

        img {
            width: 103px;
            height: 83px;
        }
    }
`

export const Form = styled.form`
    input {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #DBDBDB;
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }
`

export const Button = styled.button`
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 0;
        background-color: #4395D8;
        color: #FFF;
        font-weight: bold;
        transition: background 0.2s ease-in;
        font-size: 14px;
        border: 2px solid transparent;

        &:hover {
            background-color: #3672A3;
        }
`












