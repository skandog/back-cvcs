import express from "express";
const router = express.Router();
import { dummySkills } from '../bin/dummyskills.js';
/* GET users listing. */
router.get("/", function (req, res, next) {
    const body = req.body;
    console.log(dummySkills);
    res.json(dummySkills);
});
export default router;
