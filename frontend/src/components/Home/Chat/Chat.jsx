import React from 'react';
import {ChatContainer,TabPanel,Tab,Form} from './Chat.styles.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Chat = () => {
    const [CurrentTab,setCurrentTab] = React.useState(0);
    return (
        <ChatContainer>
            <h3 className="text-center mb-4">Chat Rooms</h3>
            <TabPanel>
                <Button>
                    <Tab CurrentTab={(CurrentTab===0)?true:false} onClick={()=>{
                        setCurrentTab(0);
                    }}>
                        join room
                    </Tab>
                </Button>
                <Button>
                    <Tab CurrentTab={(CurrentTab===1)?true:false} onClick={()=>{
                        setCurrentTab(1);
                    }}>
                        create room
                    </Tab>
                </Button>
                <Button>
                    <Tab CurrentTab={(CurrentTab===2)?true:false} onClick={()=>{
                        setCurrentTab(2);
                    }}>
                        delete room
                    </Tab>
                </Button>
            </TabPanel>
            <Form>
                {
                    (CurrentTab===1||CurrentTab===0)?(
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
                <Button variant="outlined" className="mb-3">
                    join room
                </Button>
            </Form>
        </ChatContainer>
    )
}

export default Chat;
