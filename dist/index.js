"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 3000;
var HOST = "0.0.0.0";
var app = express_1.default();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    return res.json({ test: "massa" });
});
app.listen(PORT, HOST, function () { return console.log("Server on por 3000"); });
