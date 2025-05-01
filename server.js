const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send('API is running...');
});


mongoose.connect("mongodb://localhost:27017/creator-dashboard");

const userRoutes = require("./routes/userRoutes");
const feedRoutes = require("./routes/feedRoutes");

app.use("/api/user", userRoutes);
app.use("/api/feed", feedRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
