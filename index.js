const express = require('express')

const app = express()

// [GET] home route
app.get('/', (req, res)=>{
    // res.send("This is the Home Page!")
    res.sendFile(__dirname+'/views/index.html');
})
// [GET] about route
app.get('/about', (req, res)=>{
    // res.send('Some stuff about me will go here.')
    res.sendFile(__dirname+'/views/about.html');
})
// [GET] blog route
app.get('/blog', (req, res)=>{
    // res.send('A directory of all my blog posts will go here.')
    res.sendFile(__dirname+'/views/blog-directory.html');
})

app.listen(8000, ()=>{
    console.log("listening to port 8000")
})