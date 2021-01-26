const express = require('express')
const cors = require('cors');
const router = require('./router')

const app = express();
// app.use(cors())
app.use('/api/', router)

const port = 3000;
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})