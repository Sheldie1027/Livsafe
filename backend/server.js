const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');
const { response, request } = require('express');

dotenv.config()
mongoose.connect( process.env.DATABASE_ACCESS, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    },
    (err) =>{
    if (err) throw err;
    console.log("Database Connected");
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)


app.listen(4000, () => console.log("server is running"))

 