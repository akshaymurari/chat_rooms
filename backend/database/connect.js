const mongoose = require('mongoose');

// connect database with mongoose

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.log('connection error:'));

db.once('open', function () {
    console.log('Connected to MongoDB');
});

db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});

db.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    mongoose.connect(config.connection_string);
});