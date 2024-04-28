"use strict";
// const express = require('express');
// const router = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //サーバーサイドの処理を読み込み
// const allPosts = require('../controllers/posts/allPosts');
// const createGet = require('../controllers/posts/createGet');
// const createPost = require('../controllers/posts/createPost');
// //リクエストに対する実行処理を定義
// router.get('/posts', allPosts);               //投稿一覧表示
// router.get('/posts/create', createGet);       //投稿画面表示
// router.post('/posts/create', createPost);     //投稿処理
// module.exports = router;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const allPosts_1 = __importDefault(require("../controllers/posts/allPosts"));
const createGet_1 = __importDefault(require("../controllers/posts/createGet"));
const createPost_1 = __importDefault(require("../controllers/posts/createPost"));
router.get('/posts', allPosts_1.default);
router.get('/posts/create', createGet_1.default);
router.post('/posts/create', createPost_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map