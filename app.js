const http = require('http');
const port = process.env.PORT || 3000
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://roman:mongodb@cluster0.qombh.mongodb.net/easycode?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log("MongoDB connected")
}).then(()=>{
    console.log("MongoDB connected")
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});