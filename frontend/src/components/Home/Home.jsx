import React from 'react';
import {HomeContainer} from "./Home.styles.jsx";
import Chat from "./Chat/Chat";

const Home = () => {
    return (
        <>
            <HomeContainer>
                <Chat/>
            </HomeContainer>
        </>
    )
}

export default Home
