"use strict";
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// module.exports = async(req, res) => {
//   const { content } = req.body;
//   try {
//     if (!content || !content.trim()) {
//       console.log("データ登録にエラーがありました");
//       return res.status(400).send({message: 'Content cannot be empty'});
//     }
//     await prisma.post.create({data: {content: req.body.content}});
//     console.log("データ登録に成功しました");
//     res.redirect("/posts"); //トップページへ遷移するコードをこちらに移動しました
//   } catch(error) {
//     console.log("データ登録にエラーがありました");
//     console.log(error);
//     return res.status(400).send({message: error.message});
//   }
// }
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    try {
        if (!content || !content.trim()) {
            console.log("データ登録にエラーがありました");
            res.status(400).send({ message: 'Content cannot be empty' });
            return;
        }
        yield prisma.post.create({ data: { content: content } });
        console.log("データ登録に成功しました");
        res.redirect("/posts");
    }
    catch (error) {
        console.log("データ登録にエラーがありました");
        // エラーがErrorインスタンスであるかチェックする
        if (error instanceof Error) {
            console.log(error);
            res.status(400).send({ message: error.message });
        }
        else {
            // errorがErrorインスタンスではない場合の処理
            console.log('未知のエラータイプが発生しました');
            res.status(500).send({ message: 'An unexpected error occurred' });
        }
        return;
    }
});
//# sourceMappingURL=createPost.js.map