const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');       //mongoose is used to connect to mongoDB database
// const passport = require('passport');

const users = require('./routes/api/users');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());                //body parser
app.use(express.urlencoded({ extended: false }));

// app.use(passport.initialize());
// require("./config/passport")(passport);


app.use("/api/users", users);
const db = process.env.ATLAS_URI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB database connection established successfully"))
    .catch(err => console.log(err));

app.use('/api/users', users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});