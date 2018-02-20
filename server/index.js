// load mode-specific env vars
require('dotenv').config({
  path: `./config/.${process.env.NODE_ENV}.env`
});

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const sessions = require("express-session")({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // cookies expire in 2 weeks
    maxAge: 1209600,
  }
  // store: new MemoryStore
});

const { verifyLogin, verifyRegister } = require("./passport/verify");
const searchRouter = require("./routers/searchRouter");
const viewingsRouter = require("./routers/movieViewingsRouter");
const usersRouter = require("./routers/usersRouter");
const { User } = require("../models");

let port = process.env.PORT || 3000;
const app = express();

// Passport config
passport.use('login',
  new LocalStrategy(
    {
      passwordField: "passHash"
    },
    verifyLogin
  )
);

passport.use('register',
  new LocalStrategy(
    {
			passwordField: "passHash",
			passReqToCallback: true,
    },
    verifyRegister
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// sessions
app.use(sessions)

// parse POST reqs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log requests
app.use(morgan("tiny"));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Response Headers
app.use((req, res, next) => {
  res.header({
    // CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Accepts",
  });
  next();
});

app.use(express.static("public"));
app.use(express.static("dist"));
app.use("/api/viewings", viewingsRouter);
app.use("/api/search", searchRouter);
app.use("/api/users", usersRouter);

// only serve SPA from non-REST API urls
app.get("/", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

// redirect to index
app.get("*", (req, res) => {
  return res.redirect(302, "/");
});

function startListening(app, port) {
  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  server.on("error", err => {
    if (err.code !== "EADDRINUSE") throw err;
    startListening(app, port + 1);
  });

  return server;
}

startListening(app, port);

module.exports = app;
