const express = require("express")
const RoboticsModel = require("../model/model")
const app = express()
app.use(express.json())


const RoboticsController = ({
    getData: async (req, res) => {
        let Datas = await RoboticsModel.find()
        res.send(Datas)
    },
    getDataById: async (req, res) => {
        let { id } = req.params
        let data = await RoboticsModel.findById(id)
        res.send(data)
    },
    deleteData: async (req, res) => {
        let { id } = req.params
        await RoboticsModel.findByIdAndDelete(id)
        res.send({
            message: "Succes Delete"
        })
    },
    postData: async (req, res) => {
        let newData = RoboticsModel(req.body)
        await newData.save()
        res.send({
            message: "Succes Post",
            data: req.body
        })
    },
    editData: async (req, res) => {
        let { id } = req.params
        let edit = req.body
        let edited = await RoboticsModel.findByIdAndUpdate(id, edit, { new: true })
        res.send(edited)
    }
})

module.exports = RoboticsController