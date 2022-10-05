"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
    res.json({ message: "I wish we had some information to give you ☹️" });
});
exports.default = router;
