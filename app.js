const express = require('express')
const app = express()
const {createServer} = require('http');
const port = process.env.PORT || 3000
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://roman:mongodb@cluster0.qombh.mongodb.net/easycode?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log("MongoDB connected")
}).then(()=>{
    console.log("MongoDB connected")
})

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


const Users = mongoose.model('Users', UsersSchema)

app.get('/', (req, res) => {
  Users.create({
       name: 'Roman',
       email: 'test@test.com'
      }).then(user => res.send(user))
})

const server = createServer(app);

server.listen(port,() => {
    console.log(`Server running at port `+port);
});