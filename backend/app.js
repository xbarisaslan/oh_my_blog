const express = require('express');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;
const mongooseConnection = require('./database-connection')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/post" , require("./routes"));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
