const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.status(500)

})

app.listen(3000)