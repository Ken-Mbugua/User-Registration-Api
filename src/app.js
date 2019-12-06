const express = require('express')
const UserRouter = require('./routers/user')
const port = process.env.PORT

require('./db/db')

const app = express()

app.use(express.json())
app.use(UserRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})