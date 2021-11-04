import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2rem;
    padding:3rem;
    @media (max-width: 550px) {
        padding:2rem 0 2rem 0;
    }
    @media (max-width: 400px) {
        margin:1rem;
    }
`;

