const express = require("express");
const req = require("express/lib/request");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/models/");
  },
  filename: function (req, file, cb) {
    const specifiedFilename = req.body.fileName || file.originalname;
    cb(null, 'item.glb')
  },
});
const upload = multer({ storage: storage });

// Add Post

router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    filename: file.filename,
    createdAt: new Date(),
  });
  res.status(201).send();
});

//Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://groupproject:GroupProject123@cluster0.w5ojlli.mongodb.net/test",
    { useNewUrlParser: true }
  );

  return client.db("vue_express").collection("posts");
}

module.exports = router;
