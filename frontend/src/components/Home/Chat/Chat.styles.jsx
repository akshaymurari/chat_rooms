import styled from 'styled-components';


export const ChatContainer = styled.div`
    max-width:650px;
    @media (max-width: 768px) {
        width:100%;
    }
`;

export const TabPanel = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    height:4rem;
    max-width:650px;
    margin:auto;
    justify-content: space-between;
    @media (max-width: 768px) {
        width:100%;
    }
    box-shadow: 0px 0px 5px #ccc;
`;

export const Tab = styled.div`
    // padding:0.5rem 2rem;
    font-size:1.2rem;
    color:#000;
    width:200px;
    color: ${props=>(props.CurrentTab)?"#007FFF":""};
    @media (max-width: 768px) {
        // padding:0.5rem 1rem;
        font-size:1rem;
    }
    @media (max-width: 500px) {
        font-size:0.8rem;
    }
`

export const Form = styled.div`
    box-shadow: 0px 0px 1px #ccc;
    padding:3rem 6rem;
    border:1px solid #ccc;
    display:flex;
    flex-direction:column;
    @media (max-width: 768px) {
        padding:3rem 3rem;
    }
    @media (max-width: 500px) {
        padding:3rem 2rem;
    }
`

