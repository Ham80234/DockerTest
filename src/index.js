const express = require('express')
const app = express() 
const port = process.env.PORT || 8080

app.get('/', (req, res)=> {
    res.send('<h1>hello world!</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
