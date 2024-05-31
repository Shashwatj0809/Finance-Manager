const express=require("express")
const Mongoose=require("mongoose");
const Router=require("./Routes/router");
const cors=require("cors");

const app=express();
const PORT=4001;
app.use(cors());

Mongoose.connect("mongodb://127.0.0.1:27017/moneyTracker")
.then(()=>console.log("Mongoose connected"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/",Router)


app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))