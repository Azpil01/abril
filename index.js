import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, (req, res) => {
    console.log(`All ok from ${port} Azpil!`);
})