import exp, { Express } from "express"
import authController from "./src/controllers/authController"



const app: Express = exp()

app.use(exp.json())

app.use("/auth", authController)

app.listen(process.env.PORT, (): void => console.log(`welcome to my localhost ${process.env.PORT}`))

