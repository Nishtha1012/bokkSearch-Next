import { hash } from "bcrypt";
import connectMongo from "../../../../database/connection";
import Users from "../../../../database/model/user";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "connection failed..." }));
  console.log(req.method);
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ message: "Enter Valid Form Data" });

    const { username, email, password } = req.body;

    const isExisting = await Users.findOne({ email });

    if (isExisting)
      return res.status(409).json({ message: "user already exists..." });

    const newUser = Users.create({
      email: email,
      username: username,
      password: await hash(password, 12),
    });

    console.log(newUser);
    if (newUser) {
      res.status(200).json({ message: "user registerd successfully" });
    }
  } else {
    res.status(500).json({ message: "Only post method accepted.." });
  }
}
