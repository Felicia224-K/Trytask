const express = require('express');
const { connectDB, sequelize } = require('../config/database');
require('dotenv').config();

const app = express();

app.use(express.json());

connectDB();

sequelize.sync({after: true })
    .then (()=> 
            console.log('Synchronized Databases'))
    .catch(err => console.error(err));

app.get('/',(req,res) => {
    res.send('The TaskFlow Api is running ');
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});