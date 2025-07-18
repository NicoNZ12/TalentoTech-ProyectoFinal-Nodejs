import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 4000;

const app = express()

//endpoint inicial
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server running correctly!" })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})