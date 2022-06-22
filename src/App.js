const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();
const Auth = require('./Auth');

const appApi = require('./controllers/AppController');

/**
 * Setting cors
 */
app.use(cors({
  origin: "*",
}));

/**
 * Setting body parser
 */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Setting auth
 */
app.use(Auth)

/**
 * Importing API
 */
app.use(appApi);

/**
 * Starting server
 */
app.listen(PORT, () => {
  console.log(`Available at: http://0.0.0.0:${PORT}`);
  console.log(`Server started. ${new Date()}`);
});


