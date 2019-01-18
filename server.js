const express = require("express");
const bodyParser = require('body-parser');
const logger = require("morgan")
const mongoose = require("mongoose");
const routes= require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const session = require('express-sessions');
const flash = require('connect-flash');
const passport = require('passport');
const usersAPI = require("./routes/apiRoutes/user");
require("./controllers/passport")(passport);

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes
app.use(routes);
app.use("/api/users", usersAPI);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thinkTribe", {
  useCreateIndex: true, 
  useNewUrlParser: true
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
