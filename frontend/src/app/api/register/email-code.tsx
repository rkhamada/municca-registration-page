import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      res.status(200).json({ emailCode: "ABCDEF" });
    } else {
      // Optionally handle other methods or return a 405 Method Not Allowed
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }