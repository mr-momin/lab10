const mongoose = require('mongoose');
require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const port = 3000,
    express = require("express"),
    app = express();
    homeController = require("./controllers/homeController");

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.get("/home", homeController.sendReqHTML);
app.get("/books/:number", homeController.respondWithBook);
app.get("/image", homeController.sendReqcss);

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
