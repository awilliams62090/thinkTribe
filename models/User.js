const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // `firstName` must be of type String `firstName` will trim leading and trailing
    // whitespace before it's saved `firstName` is a required field and throws a
    // custom error message if not supplied
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    // `lastName` must be of type String `lastName` will trim leading and trailing
    // whitespace before it's saved `lastName` is a required field and throws a
    // custom error message if not supplied
    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },
    // `username` must be of type String `username` will trim leading and trailing
    // whitespace before it's saved `username` is a required field and throws a
    // custom error message if not supplied
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    // `password` must be of type String `password` will trim leading and trailing
    // whitespace before it's saved `password` is a required field and throws a
    // custom error message if not supplied `password` uses a custom validation
    // function to only accept values 6 characters or more
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    // `email` must be of type String `email` must be unique `email` must match the
    // regex pattern below and throws a custom error message if it does not You can
    // read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    //will be for therapists/coaches to make changes to accounts of number one
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    // `date` must be of type Date. The default value is the current date
    userCreated: {
        type: Date,
        default: Date.now
    },
    //'task' will reference associated tasks to this user
    task: {
        type: Schema.Types.ObjectId,
        ref: "Task"
    },
    //'event' will reference associated events to this user
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    //'chat' will reference associated chats to this user
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat"
    },
    // `lastUpdated` must be of type Date
    lastUpdated: Date,
    // `fullName` must be of type String
    fullName: String

});

// Custom method `setFullName`
userSchema.methods.setFullName = () => {
    // Set the current user's `fullName` to their `firstName` and their `lastName`
    // together
    this.fullName = this.firstName + " " + this.lastName;
    // Return the new `fullName`
    return this.fullName;
};

// Custom method `lastUpdatedDate`
userSchema.methods.lastUpdatedDate = () => {
    // Set the current user's `lastUpdated` property to the current date/time
    this.lastUpdated = Date.now();
    // Return this new date
    return this.lastUpdated;
};

//Custom method to Has password
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

//encrypt password in the DB
userSchema.methods.validPassword = (password, encrypted) => {
    return bcrypt.compareSync(password, encrypted);
};
//creating and exporting the model to use in routes and controllers.
const User = mongoose.model("User", userSchema);

module.exports = User;
