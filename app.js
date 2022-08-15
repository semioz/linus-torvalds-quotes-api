require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5050;

const quotesJson = require("./quotes.json");

const quotes = linus => {
    return {
        quote: linus[Math.floor(Math.random() * linus.length)]
    }
}

app.get("/quote", (req, res) => {
    res.send(quotes(quotesJson))
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});