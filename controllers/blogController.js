const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.status(201).send('Blog created successfully');
  } catch (error) {
    res.status(500).send('Error creating blog');
  }
};

// Read Blog
exports.readBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).send('Error reading blogs');
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).send('Blog not found');
    res.status(200).send('Blog updated successfully');
  } catch (error) {
    res.status(500).send('Error updating blog');
  }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) return res.status(404).send('Blog not found');
    res.status(200).send('Blog deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting blog');
  }
};
