const books = require("../models/books")

exports.sendReqHTML = (req, res) => {
    books.find( {}, (error, data) => {
        if (data) res.render("home", {data: data});
        });
};
exports.sendReqcss = (req, res) => {
    res.sendFile(`./public/css/${req.url}.css`, {
        root: "./"
    })
};
exports.respondWithBook = (req, res) => {
    let number = req.params.number;
    //res.render(number);
    books.find( {}, (error, data) => {
        if (data) res.render(number, {data: data[number-1]});
        });
};
