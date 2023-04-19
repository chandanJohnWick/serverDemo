const joi=require('joi');
const express=require ('express');
const app=express();
app.use(express.json());
const courses =[
    {id: 1 , name:'chandan'},
    {id: 2 , name:'ashish jcb'},
    {id: 3 , name:'tushar'},   
];

app.get('/',(req,res)=>{
res.write(' this is home page ');
    res.send();
});
//app.get('/courses',(req,res)=>{
   // res.send(courses);
//});
app.post('/courses',(req,res)=>{

const schema =joi.object({ 
name:joi.string().min(3).required()
});
const result =schema.validate(req.body);
console.log (result);
if(result.error){
    //404 error
    res.status(404).send(result.error);
    return;
}

    const course ={
        id :courses.length +1,
        name :req.body.name 
    };
    courses.push(course);
    res.send(course);
});




const port =process.env.PORT || 3000;

app.listen(port,()=>{console.log("linsting post is  ${port}");
});