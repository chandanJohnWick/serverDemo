const express=require ('express');
const app=express();
const courses =[
    {id: 1 , name:'chandan'},
    {id: 2 , name:'ashish jcb'},
    {id: 3 , name:'tushar'},   
];

app.get('/',(req,res)=>{
res.write(' this is home page ');
    res.send();
});
app.get('/courses',(req,res)=>{
    res.send(courses);
});
app.get('/courses/:id',(req,res)=>{
 const course=courses.find(c=> c.id ===parseInt(req.params.id));
 if(!course) res.status(404).send('the couse is not found');
 res.send(course);
});
const port =process.env.PORT || 3000;

app.listen(port,()=>{console.log("listning  on port ${port}...");
});