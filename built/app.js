"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var dirname_js_1 = require("./dirname.js");
var cookie_parser_1 = require("cookie-parser");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var users_js_1 = require("./routes/users.js");
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(dirname_js_1.default, "public")));
app.use('/users', users_js_1.default);
app.use(function (req, res, next) {
    res.status(404).json({ message: "We couldn't find what you were looking for 😞" });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json(err);
});
exports.default = app;
