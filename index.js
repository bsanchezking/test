const express = require('express')
const app = express()

app.get ('/prueba', (req, res) => res.send('welcome to prueba') )

app.get('/', (req, res ) => res.send('hello world \n <a href="/prueba">ir a prueba</a>') )

app.listen(3000, () => console.log("running") )
