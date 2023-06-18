import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function addPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string | undefined },
  });
  const title = req.body.title;
  if (!session) {
    res.status(401).json({ message: "sign in to add a post" });
  }
  if (title.length > 300) {
    res.status(403).json({ message: "post should not exceed 300 characters" });
  }
  if (!title.length) {
    res.status(403).json({ message: "post should not be empty" });
  }
  try {
    const result = await prisma.post.create({
      data: {
        title,
        userId: user?.id,
      } as any,
    });
    console.log(result);
    res.status(200).send({ result });
  } catch (error) {
    console.log(error);
  }
}
