const express=require('express')
const app=express()

require('dotenv').config();

const port=process.env.PORT||5000

//database integartion
const mongoose=require('mongoose')
const uri=process.env.MONGODB_URI
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true}
).then(()=>{console.log("connected to mongodb")})
.catch(err => console.error('Failed to connect to MongoDB', err));
const Question = require('./model.js'); // Import the users model


//enable cors
const cors = require('cors');
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.redirect("/quizQues")
})

app.post('/quizQues/:level',async (req,res)=>{
    // const data = req.body;
  // console.log('Received data:',data);
  // const ques= await Question.find({ level: 'Even a muggle would get it right' });
  const level=req.params.level
  console.log(level)
  var ques
  if (level==='1'){ques=await Question.find({ level:'Even a muggle would get it right' });
}
else if (level==='2'){ques=await Question.find({ level:"If you like Harry Potter, I bet you can get this right" });
}
else if (level==='3'){ques=await Question.find({ level: "If you are a potterhead, this one is for you!"}
);
}
else{ques=await Question.find({ level:"Who are you?! Hermione Granger?" });
}
 
  res.json({ques:ques});
})


app.post('/quizResult',async (req,res)=>{
  const data = req.body;
console.log('Received data:',data);
if (data.count>8)
  {
    console.log("you are a wizard!!")
    //send letter in mail
  }

})







app.listen(port,()=>{console.log("app available at http://localhost:5000")})