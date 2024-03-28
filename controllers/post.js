const Post = require("../models/post.js");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const detailPost = await Post.findById(id);
    res.status(200).json(detailPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const updatePost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    res.status(200).json("Delete Post");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchPost = async (req, res) => {
  const { search, tag } = req.query;
  try {
    const { title } = new RegExp(search, "i");

    const posts = await Post.find({
      $or: [{ title }],
      tag: { $in: tag.split(",") },
    });

    res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  getDetail,
  getUpdate,
  deletePost,
  searchPost,
};
