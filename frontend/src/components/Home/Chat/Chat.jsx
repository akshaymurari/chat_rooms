import React from 'react';
import {ChatContainer,TabPanel,Tab,Form} from './Chat.styles.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {Baseurl} from "../../../App";
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';

const Chat = () => {
    const Navigate = useNavigate();
    const [CurrentTab,setCurrentTab] = React.useState(0);
    const roomaction = async () => {
        if(CurrentTab===0){
            localStorage.setItem('username',$('#username').val());
            Navigate(`/chat/${$("#roomId").val()}`);
        }
        else if(CurrentTab===1){
            if($("#conformpassword").val()===$("#password").val()){
                try{
                    const data = await axios({
                        method: 'post',
                        url: `${Baseurl}/create_room`,
                        data: {
                            roomId: $("#roomId").val(),
                            password: $("#password").val()
                        },
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        }
                    });
                    if(data.data.status===200){
                        alert(`${data.data.message} roomId:${data.data.roomCreated.roomId} password:${data.data.roomCreated.password}`);
                    }else{
                        alert(`${data.data.message}`);
                    }
                }catch(err){
                    alert("Room already exists");
                }
            }else{
                alert("password and conformpassword not matched");
            }
        }
        else{
            try{
                const data = await axios({
                    method: 'delete',
                    url: `${Baseurl}/delete_room`,
                    data: {
                        roomId: $("#roomId").val(),
                        password: $("#password").val()
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    }
                });
                if(data.data.status===200){
                    alert(`${data.data.message}`);
                }else{
                    alert(`${data.data.message}`);
                }
            }catch(err){
                alert("invalid roomId or password");
            }
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
                            <TextField id="password" className="mb-2" type="password" label="password" variant="standard" />
                            <br/>
                            {
                                (CurrentTab===1)?(
                                    <>
                                        <TextField id="conformpassword" className="mb-2" type="password" label="conform password" variant="standard" />
                                        <br/>
                                        <br/>
                                    </>
                                ):(
                                    <>
                                        <br/>
                                    </>
                                )
                            }
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
