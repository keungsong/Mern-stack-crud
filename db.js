const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser:true, useUnifiedTopology:true},
error=>{
    if(!error)
       console.log('Mongodb connection succeeded.')
       else
       console.log('Error while connecting:' + JSON.stringify(error, undefined, 2))
})