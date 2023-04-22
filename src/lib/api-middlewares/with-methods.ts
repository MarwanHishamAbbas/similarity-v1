import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export function withMethods(methods: string[], handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    // Check if the type of method we want is actual valid NextRequest method
    if (!req.method || !methods.includes(req.method)) {
      return res.status(405).end();
    }
    return handler(req, res);
  };
}
