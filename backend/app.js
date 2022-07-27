const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv').config();
const port = process.env.PORT || 5000
const mongooseConnection = require('./db/database-connection')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
 })); 
app.use(bodyParser.json());

app.use("/api/post" , require("./routes"));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req,res) => res.sendFile(__dirname + '/dist/index.html'));
}

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
