const http = require('http');
// tweo args call back function req and res
const fs = require('fs');
///require lodash
const _ = require('lodash');
////////////

const server = http.createServer((req,res) =>{
    //lodash
    const num = _.random(0,20);
    console.log(num);
    const greet = _.once(() =>{
        console.log('Hello!')
    });
    greet();
                                                                                            // response is used to send a response. 
                                                                                            // fomulate the response headers 
                                                                                            // what type of data were sending back
    res.setHeader('Content-Type', 'text/html')
    let path = './views/';
    // use a switch statement to switch between statements

    switch(req.url){
        case'/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case'/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case'/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path+= '404.html';
            res.statusCode = 404;
            break
    }
    fs.readFile(path, (err,data)=> {
        if(err){
            console.log(err);
            res.end;
        }else{
            
            res.end(data);
        }
    })
                                                                                        ///////////////////////////////////////////////////////////////////////
                                                                                        // set header content type
                                                                                    // what if html
                                                                                    //res.setHeader('Content-Type','text/plain');
                                                                                    //res.setHeader('Content-Type', 'text/html');
                                                                                    // browser writes
                                                                                    //res.write('<head><link rel ="stylesheet" href="#></head>')
                                                                                    //res.write('<p>hello</p>')
                                                                                    //process ends 
                                                                                    //res.end();
                                                                                /////////////////////////////////////////////////////////////////////

} );
                                                                                // server listen two args port and name
server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
                                                                                // local host is like a domain name takes us to a loop back ip address
                                                                                // back to our own comp
                                                                                // web > internet > back to me!!
                                                                                //// port number is a door
                                                                                // common port num is 3000
                                                                                // localhost:3000;

})