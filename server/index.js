const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req,res) => {
    res.json({message: "hello from server!!!!!", title: "home page"})
})

app.get('/q', (req,res) => {
    res.json({message: "hello from server!!", title: "home"})
})

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})