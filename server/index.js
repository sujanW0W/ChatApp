const express = require("express");
const app = express();

//Routes
const chatRoute = require("./router/chatRoute");

app.use("/chat", chatRoute);

const start = (() => {
    app.listen(5001, () => {
        console.log("Server is listening on port 5001..........");
    });
})();
