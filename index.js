import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        theName: "Azpil",
        theAge: 37,
        theCity: "CDMX"
    }
    res.render("index.ejs", data);
})

app.listen(port, (req, res) => {
    console.log(`All ok from ${port} Azpil!`);
})