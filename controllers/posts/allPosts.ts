// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// module.exports = async (req, res) => {
//   const posts = await prisma.post.findMany();
//   res.render("posts/allPosts", {posts});
// };

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// ExpressのRequestとResponseオブジェクトの型を関数のパラメータに適用
export default async (req: Request, res: Response): Promise<void> => {
  const posts = await prisma.post.findMany();
  res.render("posts/allPosts", {posts});
}