import express from "express";
import mongoose from "mongoose";

import router from "./router.js";
import fileupload from "express-fileupload";

const DB_URL =
  "mongodb+srv://user:user@cluster0.qjwlizi.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
const app = express();
app.use(express.json());
app.use("/api", router);
app.use(fileupload({}));
//app.use("/users", userRouter());

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      // useUnifiedTopology: true,
      // useNewURLParser: true,
    });
    app.listen(PORT, () => {
      console.log("Server working on PORT " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();

//app.post("/", async (req, res) => {
//   try {
//     const { author, titel, content, picture } = req.body;
//     const post = await Post.create({
//       author,
//       titel,
//       content,
//       picture,
//     });
//     //res.status(200).json("server rabotaet uuuu");
//     res.json(post);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });
