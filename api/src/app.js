require('dotenv').config();
const express = require('express');
const  { sequelize }  = require('./config/database');


require ('./models');


const app = express();
app.use(express.json());



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