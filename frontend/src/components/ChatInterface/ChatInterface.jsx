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
} from "./ChatInterface.styles";
import { Input } from 'antd';

const { Search } = Input;

const ChatInterface = () => {
  const { room_name } = useParams();
  const onSearch = value => console.log(value);
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
        <ChatBody></ChatBody>
        <br/>
        <div className="mb-0 mx-3">
          <Search
            placeholder="send a message ..."
            allowClear
            enterButton="Send"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </ChatPanel>
    </ChatWindow>
  );
};

export default ChatInterface;
