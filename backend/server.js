// server.js
const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/fileRoutes");
const app = express();

mongoose.connect(
  "mongodb+srv://harshitgalaxy710:71020011919@cluster0.ffhbhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use("/api/files", fileRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
