// routes/fileRoutes.js
const express = require("express");
const router = express.Router();
const File = require("../models/File");

// Create a file or folder
router.post("/", async (req, res) => {
  const { name, type, parent } = req.body;
  const file = new File({ name, type, parent });
  if (type === "folder") file.children = [];
  try {
    const savedFile = await file.save();
    if (parent) {
      const parentFolder = await File.findById(parent);
      parentFolder.children.push(savedFile._id);
      await parentFolder.save();
    }
    res.status(201).json(savedFile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a folder's contents
router.get("/:id", async (req, res) => {
  try {
    const folder = await File.findById(req.params.id).populate("children");
    res.json(folder);
  } catch (error) {
    res.status(404).json({ error: "Folder not found" });
  }
});

module.exports = router;
