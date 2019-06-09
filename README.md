# Eclectic List Client

Server code: https://github.com/EndreoT/Eclectic-List-Server
### Description
Node.js server for eclectic-list full stack application. Eclectic List is a concept full stack web application for creating posts for selling items that can include images, comment on user posts, and choose profile avatar images. This website draws inspiration from sites as Craigslist and Reddit. 

### Motivation
The intent of this app is to showcase a full stack web application built by Tristan Endreo, specifically the Node.js backend. Currenly, the intent is not for users to actually post real items for sale on this site. Instead, please feel free to register a 'mock' profile, create, edit, and delete posts, and comment on any post to better view Tristan's skills as a full stack and backend web developer. 

### App deployed links
```
Client: https://eclectic-list.herokuapp.com/
Server: https://eclectic-list-server.herokuapp.com/<endpoint>
Server example: https://eclectic-list-server.herokuapp.com/api/posts
```

### Installation
```
cd path/to/eclectic-list-client
npm install
touch .env
```
This app uses the newrelic (https://newrelic.com/) Heroku add on, which is optional. If you want to use newrelic, add the following to the .env file:
```
NEW_RELIC_LICENSE_KEY=<newrelic license key>
```

### Results 
This app uses the MEVN stack, which stands for MongoDB for the database, Express.js for the web server framework, Vue.js for the frontend framework, and Node.js for the run-time environment. Securely access protected routes using a JSON Web Token (JWT), and backend authentication is routed through the Passport.js middleware. The Vuex library for Vue allows for persistent user login. Lastly, images are stored using Cloudinary hosting.

This app is hosted on two Heroku apps: First, the server side creates a RESTful API. An example of the the '/api/posts' endpoint can be found here. Second, the Vue.js app is also served by an Express.js server on Heroku. 

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
