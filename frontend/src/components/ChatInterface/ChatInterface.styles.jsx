import styled from 'styled-components';

export const ChatWindow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:2rem;
    height: 94vh;
    border: 1px solid #ccc;
    @media (max-width:500px){
        margin:0;
    }
    @media (max-width:770px){
        height: auto;
    }
`

export const OnlineUsers = styled.div`
    height:50%;
    overflow-y: scroll;
    border: 1px solid #ccc;
    @media (max-width:770px){
        width:100%;
    }
`

export const TypingUsers = styled(OnlineUsers)`
`;

export const UsersInfo = styled.div`
    height:100%;
    width:30%;
    @media (max-width:770px){
        width:100%;
        height:30vh;
        order:2;
        self-align:flex-end;
    }
`

export const ChatPanel = styled.div`
    width:70%;
    @media (max-width:770px){
        width:100%;
        order:1;
        margin-bottom:1rem;
    }
`

export const ChatHeader = styled.div`
    padding:1rem;
    border-bottom: 1px solid #ccc;
`

export const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    height:75vh;
    border-bottom: 1px solid #ccc;
    overflow-y: scroll;
    @media (max-width:770px){
        height:70vh;
    }
`

export const Me = styled.div`
    background-color: #77cf6d;
    width:max-content;
    max-width:60%;
    word-wrap: break-word;
    font-size:1.2rem;
    margin:1.4rem 1.5rem;
    padding:1rem 0.7rem;
    margin-left:auto;
    border-radius:0.2rem;
`

export const Others = styled(Me)`
    background-color: #1890ff;
    margin-left:1.5rem;
    margin-right:auto;
`