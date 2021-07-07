const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'})

require('./db/conn.js')
// const User = require('./model/userSchema');

app.use(express.json());

//we link the router files to make our route easy
app.use(require('./router/auth.js'));

//Middleware  
const middleware = (req, res, next) => {
    console.log(`middleware`);
    next();
}

// app.get('/', (req, res) => {
//     res.send('hello app.js');
// });

app.get('/about', middleware, (req, res) => {
    res.send('helloabout');
});

app.get('/contact', (req, res) => {
    res.send('hellocontact');
});

app.get('/signin', (req, res) => {
    res.send('hellosignin');
});

app.get('/signup', (req, res) => {
    res.send('hellosignup');
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})