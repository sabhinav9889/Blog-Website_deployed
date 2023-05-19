const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title :{ 
        type: String,
    },
    content :{
        type: String,
    },
});

const User = new mongoose.model("blog", UserSchema);

module.exports = User;