import path from "path";

require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const configFile = {
  port: process.env.PORT,
};

export default configFile;
