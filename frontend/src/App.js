import React from "react";
import {Route, Routes,HashRouter} from "react-router-dom";
import Home from "./containers/Home/Home";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/chat/:room_name" element={<ChatInterface/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
