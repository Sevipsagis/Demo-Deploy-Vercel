const express = require('express')
const app = express()
const port = 3000

app.use(express.json({ extended: false }))

app.get('/greeting', (req, res) => {
  res.json({
      status: 'Success',
      message: 'Hello, World!'
  })
})

app.use((_, res) => {
    res.json({
        status: 'Error',
        message: 'Your request is invalid'
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})