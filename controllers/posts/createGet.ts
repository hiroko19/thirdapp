// module.exports = (req, res) => {
//   res.render("posts/createGet")
// }

import { Request, Response } from 'express';

const createGet = (req: Request, res: Response): void => {
  res.render("posts/createGet")
}

export default createGet;