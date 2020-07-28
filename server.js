const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(bodyParser.json())

//routes
//GET
app.get('/', (req,res) =>{
    res.send("<h1>You are on the homepage</h1>");
})
//POST
app.post('/post', (req,res) =>{
    console.log(req.body);
   res.send(`Welcome ${req.body.user}`);
})
//DELETE
app.delete('/delete', (req,res) =>{
    console.log(req.body);
     res.send(`delete : true`);
 })
//PUT
 app.put('/put/:id',(req,res)=>{
     res.send(`Task ${req.params.id} has been updated`);
 })

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})