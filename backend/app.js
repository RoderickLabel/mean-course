const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");
const db = "node-angular";

mongoose.connect("mongodb://localhost:27017/" + db, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    res.status(201).json({
        message: "Post added successfully"
    });
});

app.get("/api/posts", (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully!",
            posts: documents
        });
    });
});

module.exports = app;
