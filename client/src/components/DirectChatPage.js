import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChatPage = ({ currentUser, currentUserSecret }) => {
    const [username, setUsername] = useState("");

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername("")
        );
    }

    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>Create</button>
            </div>
        );
    }

    return (
        <ChatEngine
            height="100vh"
            userName={localStorage.getItem("currentUser")}
            userSecret={localStorage.getItem("currentUserSecret")}
            projectID="2843d969-4403-406f-b129-357fe07609c3"
            renderNewChatForm={(creds) => renderChatForm(creds)}
        />
    );
};

export default DirectChatPage;
