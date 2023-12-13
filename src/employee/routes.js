const router = require("express").Router();
const controller = require("./controller");
const db = require("../../dbConfig");
const queries = require("./queries");
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./uploads") },
    filename: function (req, file, cb) { cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname) }
})
var upload = multer({ storage: storage }).single('image')

router.get("/", controller.getEmployees);

router.get("/add", controller.addEmployee);

router.post("/add", upload,controller.insertEmployee )

module.exports = router;