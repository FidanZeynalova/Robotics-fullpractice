const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const route = require("./routes/routes")

app.use(cors())
app.use(express.json())
dotenv.config()

require("./config/config")
app.use("/robot", route)

app.listen(process.env.port, () => {
    console.log("succes 4040 port");

})
