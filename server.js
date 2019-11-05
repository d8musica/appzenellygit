const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const url = 'mongodb+srv://admin:<admin>@cluster0-9doht.mongodb.net/test?retryWrites=true&w=majority'


app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json({ limit: '20mb' }))
  server.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

  server.post('/logindata',(req,res) =>{
    
    if(req.body.username == "d8" && req.body.password == "d8"){
      
      res.send('ok')
    }
  })
  

  

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Que es la que hay pa' on http://localhost:${port}`)
  })
})