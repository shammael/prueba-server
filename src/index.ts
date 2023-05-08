import Server from "./models/Server";

const server = Server.getInstance();

server.start(() => console.log("Server running on port "));
