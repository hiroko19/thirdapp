"use strict";
// const express = require("express");
// const app = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // クライアントから送信されたデータを解析し、req.bodyオブジェクトとしてアクセスできるようにする
// app.use(express.urlencoded({ extended: true }));
// // テンプレートエンジンにEJS使用するように設定
// app.set("view engine", "ejs");
// // publicフォルダ内のファイルを、を静的ファイルとして扱うよう設定
// app.use("/public", express.static("public"));
// // ルーティングを読み込む
// const routers = require("./routes");
// app.use(routers);
// // localhost:3000で起動
// app.listen(3000, () => {
//     console.log("Listening on localhost port 3000");
// });
const app_1 = __importDefault(require("./app"));
const server = app_1.default.listen(3000, () => {
    console.log("Listening on localhost port 3000");
});
exports.default = server;
//# sourceMappingURL=index.js.map