import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import loginRoutes from './routes/login.route.js'
// import userRoutes from './routes/users.route.js'
import productRoutes from './routes/products.route.js'

dotenv.config()
const PORT = process.env.PORT || 4000;

const app = express()

//middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}))


//endpoint inicial
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server running correctly!" })
})

app.use("/api/products", productRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/auth/", loginRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})