# nodejs-express-server-template

A simple nodejs express server template

# SETUP
1. Install required packages:
```
npm install
```
2. Start the server. By default, it will start on http://0.0.0.0:4000
- production server
```
npm start
```
- development server (uses nodemon for reload on file changes)
```
npm run dev
```

## STRUCTURE
This templates uses a simple MVC-like structure.

All server related files are placed in `/src` directory.

<details>
    <summary>PROJECT TREE</summary>

* [src](./src) *----------------------------- project source directory*
    * [controllers](./src/controllers) *------------- api controllers. responsible for processing requests and generating responses*
        * [AppController.js](./src/controllers/AppController.js) *- main API controller*
        * .....
    * [models](./src/models) *----------------- business data, rules and logic*
        * .....
    * [App.js](./src/App.js) *------------------- main server file. don't break it*
    * [Auth.js](./src/Auth.js) *------------------ middleware. prevents unauthorized requests*
    * [config.js](src/configs/config.js) *---------------- main config file: bearer token; version; etc.*
* [package.json](package.json)
* [README.md](./README.md) *--------------- pls notice me*

</details>

## Default packages:
 - [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
 - [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
 - [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 - [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
 - [nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.