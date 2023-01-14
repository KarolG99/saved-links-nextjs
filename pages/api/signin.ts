import { mongodbConnectionString } from "@/constants";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(`${mongodbConnectionString}`);
    const db = client.db();
    const usersCollection = db.collection("users");
    const email = req.body.email;
    const user = await usersCollection.findOne({ email });

    if (user) {
      res.status(200).json(user._id);
    } else {
      const userBody = {
        name: req.body.name,
        image: req.body.image,
        email: req.body.email,
        links: [],
        tags: [],
      };
      const { insertedId } = await usersCollection.insertOne(userBody);
      if (insertedId) res.status(200).json(insertedId);
    }
  }
};

export default handler;
