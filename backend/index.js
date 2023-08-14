const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const db = require('./mongoDb')

app.use(cors());
app.use(express.json())

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })