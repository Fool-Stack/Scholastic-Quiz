const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Questionrouter = require('./routers/questions') 
const Authrouter =require('./routers/auth')
const cors = require('cors') 

require('dotenv').config()

app.use(cors()) 
app.use(express.json()) 
app.use(Questionrouter) 
app.use('/api/user',Authrouter)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))



app.listen(process.env.PORT, () => {
    console.log("The API is running...")
})