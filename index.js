const http = require('http');

http.createServer((req,res)=>{
    res.write("");
    res.end();
}).listen(4502);
