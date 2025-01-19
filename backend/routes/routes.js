const express = require("express")
const RoboticsController = require("../controller/controller")
const route = express.Router()


route.get("/", RoboticsController.getData)
route.get("/:id", RoboticsController.getDataById)
route.delete("/:id", RoboticsController.deleteData)
route.post("/", RoboticsController.postData)
route.put("/:id", RoboticsController.editData)


module.exports = route