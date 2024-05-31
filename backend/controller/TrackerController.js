const MoneyTrackerModel=require("../model/model");

async function saveDetails(req,res){
    console.log(req.body)
    const amount=req.body.amount;
    const discription=req.body.description;
    const date=req.body.date;

    MoneyTrackerModel
    .create({amount,discription,date})
    .then((data)=>{
        console.log("Added Successfully");
        console.log(data);
        res.send(data)
    })

    .catch((error)=>{
        console.error("Error adding data:",error);
        res.status(500).send("Internal server error")
    })
}

async function addDetails(req,res){
    data=req.body;
    MoneyTrackerModel
    .find()
    .then((data)=>{
        res.json(data);
    })


}

async function loginPage(req,res){
    const{email,password}=req.body;

    try{
        const check=await collection.findOne({email:email,password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("not exist")
    }

}

async function signupPage(req,res){
    const{email,password}=req.body;
    const data={
        email:email,
        password:password,
    }
    console.log(data);

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            
            await MoneyTrackerModel.insertMany([data])
            res.json("notexist")
        }
    }
    catch(e){
        res.json("not exist")
    }
}

async function getDetails(req,res){

//    const {email,password} = (req.body);
// const data=req.data
   MoneyTrackerModel
   .find().then(({email,password})=>{
    console.log({email,password});
    res.json({email,password})
    
   })


}

module.exports={saveDetails,addDetails,loginPage,signupPage,getDetails};
// module.exports={addDetails};