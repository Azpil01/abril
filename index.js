import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        theName: "Juan",        
        theAge: 37,
        theCity: "CDMX",
        theCountry: "MX",
        theStreet: "Nogal",
        theNumber: 262
        
    }
    res.render("index.ejs", data);
})

app.listen(port, (req, res) => {
    console.log(`All ok from ${port} Azpil!`);
})




//I am a commet from anotherName

//! This is the master