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
// module.exports = async (req, res) => {
//   const posts = await prisma.post.findMany();
//   res.render("posts/allPosts", {posts});
// };
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// ExpressのRequestとResponseオブジェクトの型を関数のパラメータに適用
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma.post.findMany();
    res.render("posts/allPosts", { posts });
});
//# sourceMappingURL=allPosts.js.map