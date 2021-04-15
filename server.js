const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users")

const app = express();

// express middleware (bodyParser is deprecated)
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => {
  console.log(err.message)
  process.exit(1);
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));