const express=require ('express');
const app=express();

app.get('/',(req,res)=>{
res.write(' this is home page ');
    res.send();
});
app.get('/courses',(req,res)=>{
    res.send(courses);
});
const port =process.env.PORT || 3000;
//const port =5000;
//const port =process.env.PORT || 5000 ;
app.listen(port,()=>{console.log(`listning  on port ${port}...`);
});