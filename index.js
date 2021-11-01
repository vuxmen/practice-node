const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let a = 2
    res.send('Practice Node/express')
})

app.get('/news', (req, res) => res.send('new node'))

app.listen(port, () => console.log(`Example listening on port ${port}`))

