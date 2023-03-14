const { utimes } = require('fs')
const http = require('http')
const url = require('url')

http.createServer((req,res) =>{
 let url = req.url
if(url === "/" && req.method ==="GET"){
    res.write("welcome to my get method")
    res.end()
}else if(url ==="/post"&& req.method === "POST"){
    res.write("welcome to my post method")
    res.end()
}else{
    res.write("page not found")
    res.end()
}
}).listen(8080,()=>{
    console.log("Server listening at port no.8080")
})

