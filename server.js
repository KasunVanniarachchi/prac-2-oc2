var express = require("express")
​
var app = express()
​
​
app.use(express.static(_dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}))

const addnumbers = (numbers1,numbers2) =>{
    var numbers1 = parsint(numbers1)
    var numbers2 = parsint(numbers2)
    var result = numbers1+numbers2;
    return result;
}

app.get("/addTwoNumbers", (req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addnumbers=(number1,number2)
    res.json({statuscode:200, data: result,message:'success' })
})

var port = process.env.port || 3000;
​

app.listen(port,()=>{
    ​
    console.log("App listening to: http://localhost:"+port)
    ​
})
​