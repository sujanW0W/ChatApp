import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const currentUser = localStorage.getItem("currentUser");

    useEffect(() => {
        if (currentUser) {
            navigate("/chatRoom");
        }
    }, [currentUser]);

    const handleSubmit = async () => {
        const url = "https://api.chatengine.io/users/";
        const userObject = {
            username: userName,
            secret: password,
        };
        try {
            const userResponse = await axios.put(url, userObject, {
                headers: {
                    "PRIVATE-KEY": "603bd98d-0bf1-4e29-a492-befa138c3465",
                },
            });

            console.log(userResponse);

            localStorage.setItem("currentUser", userResponse.data.username);
            localStorage.setItem("currentUserSecret", password);
            navigate("/");
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <div className="loginDiv">
            <h1>Chat App</h1>
            <div className="inputBox">
                <h2>Login</h2>
                <input
                    id="inputUserName"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Login;
