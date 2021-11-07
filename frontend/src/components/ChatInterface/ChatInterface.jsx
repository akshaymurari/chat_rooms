import React from "react";
import { useParams } from "react-router";
import {
  ChatWindow,
  TypingUsers,
  OnlineUsers,
  UsersInfo,
  ChatPanel,
  ChatHeader,
  ChatBody,
  Me,MeDate,
  Others,OthersDate,
  MeName,OthersName
} from "./ChatInterface.styles";
import { Input } from 'antd';
import {ws_url} from "../../App";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

const { Search } = Input;

const ChatInterface = () => {
  const navigate = useNavigate();
  const [data,setdata] = React.useState([]);
  const { room_name } = useParams();
  const username = localStorage.getItem("username") || "Anonymous";
  const ws = new WebSocket(`${ws_url}/${room_name}`);
  const onSend = (value) =>{
    ws.send(JSON.stringify({
      type: "send_message",
      data: {
        username,
        message: value
      }
    }));
  } 
  React.useEffect(()=>{
    ws.onopen = () => {
      console.log("connected");
      ws.send(JSON.stringify({
        type: "get_room_data",
      }));
    };
    ws.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      console.log(msg);
      if(msg===null){
        alert("Room not found");
        navigate("/");
      }else if(msg.data==undefined){
        setdata(msg.messages);
      }
      else{
        setdata(pre=>{
          return [...pre,msg.data];
        });
      }
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
    ws.onerror = (error) => {
      console.log(error);
    };
  },[]);
  return (
    <ChatWindow>
      <UsersInfo>
        <OnlineUsers>
          <h2 className="text-center">Online Users</h2>
        </OnlineUsers>
        <TypingUsers>
          <h2 className="text-center">Typing Users</h2>
        </TypingUsers>
      </UsersInfo>
      <ChatPanel>
        <ChatHeader>
          <h2 className="text-center">
            {room_name.length <= 12
              ? room_name
              : `${room_name.substring(0, 12)}...`}
          </h2>
        </ChatHeader>
        <ChatBody >
          {
            data.map((item)=>{
              return (item.username===username)?(
                <>
                  <MeName>
                    {item.username}
                  </MeName>
                  <Me>
                      {item.message}
                  </Me>
                  <MeDate>
                    {item.date}
                  </MeDate>
                </>
              ):(
                <>
                  <OthersName>
                    {item.username}
                  </OthersName>
                  <Others>
                      {item.message}
                  </Others>
                  <OthersDate>
                    {item.date}
                  </OthersDate>
                </>

              )
            })
          }
        </ChatBody>
        <br/>
        <div className="mb-0 mx-3">
          <Search
            id="message"
            placeholder="send a message ..."
            enterButton="Send"
            size="large"
            onSearch={onSend}
          />
        </div>
      </ChatPanel>
    </ChatWindow>
  );
};

export default ChatInterface;
