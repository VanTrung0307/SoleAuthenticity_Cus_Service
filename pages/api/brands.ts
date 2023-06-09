import type { NextApiRequest, NextApiResponse } from "next";
import { brands } from "./../../utils/data/brands";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);

  // fake loading time
  setTimeout(() => {
    res.status(200).json(brands);
  }, 800);
};

export default handler;
