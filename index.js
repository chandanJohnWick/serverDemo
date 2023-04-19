 const http = require ('http');

 const server =http.createServer((req,res)=>{
res.end('helllo chandan from john wick 4');
 });

 server.listen(8000,()=>{
    console.log(
        'we are listining you dont  anywherego'
    )
 });