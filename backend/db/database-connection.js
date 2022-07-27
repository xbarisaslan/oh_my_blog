const mongoose= require('mongoose');
const MONGODB_URI = "mongodb+srv://xbaris:xbaris@oh-my-blog.e2agqkt.mongodb.net/?retryWrites=true&w=majority"

let connectionString = MONGODB_URI;

mongoose.connect(connectionString , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connection successful!')).catch((err) => console.log('Database connection failed'))

module.exports = mongoose.connection