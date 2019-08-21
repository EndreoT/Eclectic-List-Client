# Eclectic List Client

## Deployed Links
Client app: https://eclectic-list.herokuapp.com/

Server API: https://eclectic-list-server.herokuapp.com

Server example endpoint: https://eclectic-list-server.herokuapp.com/api/posts

Server code: https://github.com/EndreoT/Eclectic-List-Server

## Description
The Node and Express.js server for Eclectic List. Eclectic List is a classified advertisements full stack web application allowing users to create posts about items for sale. Posts can contain text, images, and a category, users can comment on the posts, and users can select an avatar image. This website draws inspiration from sites as Craigslist and Reddit. 

## Motivation
The intent of this app is to give users a platform for easily selling items for free and discussing those items, compared with other sites which monitize the posting of items.

## Results 
This app uses the MEVN stack, which stands for MongoDB for the database, Express.js for the web server, Vue.js for the frontend framework, and Node.js for the run-time environment. Securely access protected routes using a JSON Web Token (JWT), and backend authentication is routed through the Passport.js middleware. Mocha and Chai unit tests are included. The server is now written in Typescript!

The Vuex library for Vue allows for persistent user login. Lastly, images are stored using Cloudinary hosting. 

This app is hosted on two Heroku apps: First, the server side exposes a RESTful API design pattern. Second, the Vue.js app is also served by an Express.js server on Heroku. This separation of client and server, as well as the REST API, paves the road for the possibile development of a native mobile client in the future.

## Future improvements
- [ ] Implement Typescript for Vue.js client 
- [ ] Allow users to edit and delete comments
- [ ] Add locations to posts
- [ ] Allow for direct messages between users in real time

### Automatic build
Files are automatically built on Heroku using "heroku-postbuild" script

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
