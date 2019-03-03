const http = require("http");
const express = require('express');

let server = express();

server.get('/api', function (req, res) {
    const data = {
            
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
              };
              
        
        

    
    console.log("服务器接收到一个请求");

    // res.setHeader("Access-Control-Allow-Origin", "*"); 
    // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("X-Powered-By",' 3.2.1');
    // res.setHeader("Content-Type", "text/html");

    res.send(data);
    res.end()
})

server.listen(8888);