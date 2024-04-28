// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

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

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async (req: Request, res: Response): Promise<void> => {
  const { content } = req.body;

  try {
    if (!content || !content.trim()) {
      console.log("データ登録にエラーがありました");
      res.status(400).send({ message: 'Content cannot be empty' });
      return;
    }

    await prisma.post.create({ data: { content: content } });
    console.log("データ登録に成功しました");
    res.redirect("/posts");

  } catch (error: unknown) {
    console.log("データ登録にエラーがありました");

    // エラーがErrorインスタンスであるかチェックする
    if (error instanceof Error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    } else {
      // errorがErrorインスタンスではない場合の処理
      console.log('未知のエラータイプが発生しました');
      res.status(500).send({ message: 'An unexpected error occurred' });
    }
    return;
  }
};