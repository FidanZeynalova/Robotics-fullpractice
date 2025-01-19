const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

let RoboticsSchema = new mongoose.Schema({
    img:String,
    name:String,
    desc: String
})

let RoboticsModel = mongoose.model("robot",RoboticsSchema)

module.exports = RoboticsModel