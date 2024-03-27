import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const userData = req.body;
      const response = [{ redirectTo: "/register/confirm" }];
      
      return res.status(201).json({ message: "User registered successfully", response });
    }
    
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  