import React from 'react';
import {ChatContainer,TabPanel,Tab,Form} from './Chat.styles.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Chat = () => {
    const [CurrentTab,setCurrentTab] = React.useState(0);
    const roomaction = async () => {
        if(CurrentTab===0){
            const data = await axios({
                method: 'get',
                url: 'http://localhost/',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
        }
    }
    return (
        <ChatContainer>
            <h3 className="text-center mb-4">Chat Rooms</h3>
            <TabPanel>
                <Button onClick={()=>{
                        setCurrentTab(0);
                    }}>
                    <Tab CurrentTab={(CurrentTab===0)?true:false} >
                        join room
                    </Tab>
                </Button>
                <Button onClick={()=>{
                        setCurrentTab(1);
                    }}>
                    <Tab CurrentTab={(CurrentTab===1)?true:false} >
                        create room
                    </Tab>
                </Button>
                <Button onClick={()=>{
                        setCurrentTab(2);
                    }}>
                    <Tab CurrentTab={(CurrentTab===2)?true:false} >
                        delete room
                    </Tab>
                </Button>
            </TabPanel>
            <Form>
                {
                    (CurrentTab===0)?(
                        <>
                            <TextField id="username" className="mb-2" label="username" variant="standard" />
                            <br/>
                        </>
                    ):(
                        <>
                        </>
                    )
                }
                <TextField id="roomId" className="mb-2" label="roomId" variant="standard" />
                <br/>

                {
                    (CurrentTab===1||CurrentTab===2)?(
                        <>
                            <TextField id="password" className="mb-2" label="password" variant="standard" />
                            <br/>
                            <br/>
                        </>
                    ):(
                        <>
                            <br/>
                        </>
                    )
                }
                <Button variant="outlined" color={
                        (CurrentTab===0)?"primary":
                        (CurrentTab===1)?"success":"secondary"  
                    } 
                    className="mb-3" 
                    onClick={roomaction}
                    >
                        {
                            (CurrentTab===0)?"join room":
                            (CurrentTab===1)?"create room":
                            (CurrentTab===2)?"delete room":""
                        }
                </Button>
            </Form>
        </ChatContainer>
    )
}

export default Chat;
