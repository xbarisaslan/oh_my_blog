require('dotenv').config();
const mongoose= require('mongoose');

let connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connection successful!')).catch((err) => console.log('Database connection failed'))

module.exports = mongoose.connection