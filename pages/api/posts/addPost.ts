import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function addPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "post") {
    const session = await getServerSession(authOptions);
    if (!session) {
        res.status(401).json({ message: "sign in to add a post" });
        console.log(req.body)
    }
  }
  res.status(200).json({ post: "post sent successfully" });
}
