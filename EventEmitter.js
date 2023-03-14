const EventEmitter = require('events')
const events =  new EventEmitter()

events.on("onclick",(sc,sm)=>
{
    console.log(sc,sm)
   
})
events.emit("onclick",200,"OK")