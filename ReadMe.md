# A MERN Starting Point

A starting point for building MERN projects based on the blog walkthrough by @rishipr

[Link to article](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)

## 🛠 Server Tech Used
- bcryptjs: used to hash passwords before we store them in our database
- concurrently: allows us to run our backend and frontend concurrently and on different ports
- express: sits on top of Node to make the routing, request handling, and responding easier to write
- is-empty: global function that will come in handy when we use validator
- jsonwebtoken: used for authorization
- mongoose: used to interact with MongoDB
- passport: used to authenticate requests, which it does through an extensible set of plugins known as `strategies`
- passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
- validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)

## 🛠 Client Tech Used
- axios: promise based HTTP client for making requests to our backend
- classnames: used for conditional classes in our JSX
- jwt-decode: used to decode our jwt so we can get user data from it
- react-redux: allows us to use Redux with React
- react-router-dom: used for routing purposes
- redux: used to manage state between components (can be used with React or any other view library)
- redux-thunk: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions

## 🎢 Setup

### Install all of the dependencies:
```bash
npm install
```

### Add a .env file to the root and include:
```
MONGO_URI="YOUR_DB_URI"
SECRET="YOUR_SECRET"
```

### Create a `dev.js` file in the config folder and include:
```javascript
module.exports = {
  mongoURI: "YOUR_DB_URI",
  secretOrKey: "YOUR_SECRET"
}
```

## 🏃🏾‍♂️ Run Server
```bash
npm run dev
```