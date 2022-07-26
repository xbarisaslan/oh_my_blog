const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv').config();
const port = process.env.PORT;
const mongooseConnection = require('./db/database-connection')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
 })); 
app.use(bodyParser.json());
app.use("/api/post" , require("./routes"));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
