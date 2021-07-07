const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('hello routerjs');
});

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error: "plz fill the credentials"});
    }

    try {

        const userExist = await User.findOne({ email: email });

        if(userExist) {
            return res.status(422).json({ error: "Email already exist"});
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password doesn't match"});
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();
            res.status(201).json({ message: 'user registered'});

        }

        
    } catch (err) {
        console.log(err);
    }

    // User.findOne({ email: email })
    //     .then((userExist) => {
    //         if(userExist) {
    //             return res.status(422).json({ error: "Email already exist"});
    //         }

    //         const user = new User({ name, email, phone, work, password, cpassword });

    //         user.save().then(() => {
    //             res.status(201).json({ message: 'user registered'});
    //         }).catch(err => res.status(500).json({ error: 'Failed to register user'}));

    //     }).catch(err => console.log(err))

})

router.post('/signin', async (req, res) => {

    try{
        const { email, password } = req.body;
        
        if( !email || !password ){
            return res.status(422).json({ error: "plz fill the credentials"});
        }

        const userLogin = await User.findOne({ email: email });

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if(!isMatch) {
                res.status(400).json({ error: "invalid Credentials"});
            } else {
                res.status(422).json({ message: "user signed in"});
            }
        } else {
            res.status(400).json({ error: "invalid Credentials"});
        }

        

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;

// {
//     "name": "aysha",
//     "email": "aysha@gmail.com",
//     "phone": "1234567890",
//     "work": "web dev",
//     "password": "aysha",
//     "cpassword": "aysha"
// }