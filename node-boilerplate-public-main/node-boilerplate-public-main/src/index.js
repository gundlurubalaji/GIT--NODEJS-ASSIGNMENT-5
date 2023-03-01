const http = require("http");

const balajiserver = http.createServer(balaji );

contactlist= {  
    phone: '9505716578', 
         email: 'balajirock7093@gmail.com' 
   }

function balaji(req, res) { 
    if(req.url ==="/welcome"){
        res.writeHead(200,{'content-type':' text/plain'})
        res.end("Response should be Welcome to Dominos!")
    }
    else if(req.url ==="/contact"){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(contactlist))
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end("<h1> page not found<h1>")
    }
}
balajiserver.listen(8081,()=>{
    console.log("backend server is running")
})

module.exports = balajiserver;