import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  const { name = null, description = null } = body;
  if (!name || !description) {
    res.status(400).json({ message: 'Error' });
  }
  res.status(200).json({ message: `Name: ${name}, comment: ${description}` });
}
