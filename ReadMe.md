# A MERN Starting Point

A starting point for building MERN projects based on the blog walkthrough by @rishipr

[Link to article](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)

## 🛠 Tech Used
- bcryptjs: used to hash passwords before we store them in our database
- body-parser: used to parse incoming request bodies in a middleware
- concurrently: allows us to run our backend and frontend concurrently and on different ports
- express: sits on top of Node to make the routing, request handling, and responding easier to write
- is-empty: global function that will come in handy when we use validator
- jsonwebtoken: used for authorization
- mongoose: used to interact with MongoDB
- passport: used to authenticate requests, which it does through an extensible set of plugins known as `strategies`
- passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
- validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)

## 🏃🏾‍♂️ Run Server
`nodemon run server.js`