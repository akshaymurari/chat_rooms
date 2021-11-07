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
    margin:0rem 1.5rem 1rem 1.5rem; 
    padding:1rem 0.7rem;
    margin-left:auto;
    border-radius:0.2rem;
`

export const MeDate = styled.div`
    width:max-content;
    max-width:60%;
    word-wrap: break-word;
    font-size:0.8rem;
    margin:-1.4rem 1rem 0rem 0rem;
    padding:1rem 0.7rem;
    margin-left:auto;
    border-radius:0.2rem;
    font-weight:bold;
`

export const Others = styled(Me)`
    background-color: #1890ff;
    margin-left:1.5rem;
    margin-right:auto;
`

export const OthersDate = styled(Others)`
    background-color: #fff;  
    font-weight:bold;
    padding:0;
    margin: -0.7rem auto 0rem 1.4rem;
    font-size:0.8rem;
`

export const MeName = styled(MeDate)`
    margin: 0.6rem 1rem 0.4rem 0rem;
    margin-left:auto;
    padding:0;
    font-weight:900;
    font-size:1rem;
`

export const OthersName = styled(MeDate)`
    margin: 0.6rem 0rem 0.6rem 1.4rem;
    margin-right:auto;
    padding:0;
    font-weight:900;
    font-size:1rem;
`