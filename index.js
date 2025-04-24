import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        theCountry: "MX"
    }
    res.render("index.ejs", data);
})

app.listen(port, (req, res) => {
    console.log(`All ok from ${port} Azpil!`);
})