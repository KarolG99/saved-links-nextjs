import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { mongodbConnectionString } from "../../../constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(`${mongodbConnectionString}`);
    const db = client.db();
    const usersCollection = db.collection("users");
    const userID = req.query.id;
    const user = await usersCollection.findOne(
      new ObjectId(userID?.toString())
    );

    const formattedTag = req.body.tag.replaceAll(" ", "").toLocaleLowerCase();

    if (user) {
      const newLink = {
        id: new ObjectId(),
        title: req.body.title,
        tag: formattedTag,
        description: req.body.description,
        link: req.body.link,
      };
      if (!user.tags.includes(formattedTag) && formattedTag.length > 0) {
        await usersCollection.updateOne(
          { _id: new ObjectId(userID?.toString()) },
          {
            $push: {
              links: newLink,
              tags: formattedTag,
            },
          }
        );
      } else {
        await usersCollection.updateOne(
          { _id: new ObjectId(userID?.toString()) },
          {
            $push: {
              links: newLink,
            },
          }
        );
      }

      res.status(200).send({ Message: "Success" });
    } else {
      res.status(400).send({ Message: "User not found" });
    }

    client.close();

    res.status(201).send({ Message: "Link added" });
  }
};

export default handler;
