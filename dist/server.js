"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
function main() {
    const port = config_1.default.port;
    try {
        const server = app_1.default.listen(port, () => {
            console.log(`Server is listening on port : ${port}`);
        });
    }
    catch (error) {
        throw new Error("Something went wrong in server !");
    }
}
main();
