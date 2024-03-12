const express = require('express');
const app = express();
app.get('/healthy',(req,res) => {
    res.send({status: 'healthy'});
})
app.get('/names',(req,res) => {
    res.send({name: 'harsh'});
})
app.listen(8000,()=> {
    console.log('server is running on port 8000')
})