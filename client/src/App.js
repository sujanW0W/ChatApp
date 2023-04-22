import React from "react";
import "./App.css";
import Login from "./components/Login";
import DirectChatPage from "./components/DirectChatPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chatRoom" element={<DirectChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
