import { Server } from "http";
import app from "./app";
import configFile from "./config";

function main() {
  const port = configFile.port;
  try {
    const server: Server = app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  } catch (error) {
    throw new Error("Something went wrong in server !");
  }
}

main();
