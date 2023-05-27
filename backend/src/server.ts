import express from "express"
import { Application } from "express"
import initializeRouter from "./routers"

const app: Application = express()
initializeRouter(app)
app.listen(3000, () => {
    console.log("server is running on port 3000");
})