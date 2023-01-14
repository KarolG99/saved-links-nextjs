import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { mongodbConnectionString } from "../../../constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(`${mongodbConnectionString}`);
    const db = client.db();
    const usersCollection = db.collection("users");
    const userID = req.query.id;
    const user = await usersCollection.findOne(
      new ObjectId(userID?.toString())
    );

    if (user) {
      res.status(200).json({
        links: user.links,
        tags: user.tags,
      });
    } else {
      res.status(400).send({ Message: "User not found" });
    }
  }
};

export default handler;
