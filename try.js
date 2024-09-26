const express = require("express");
const port = 4000;
const cars = require('./modes/index')
const carroutes = require('./routes/carroutes')
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'view'));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


app.use('/api',carroutes);

// app.get('/home',(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname,'view/index.html'));
// })


//  add cars
// app.route('/api/addcars').post((req,res)=>{
//     let {name} = req.body;
//     cars.push(name);
//     res.status(201).send("car added")
// })


// show cars
// app.route('/api/showcars').get((req,res)=>{
//     console.log({cars})
// res.status(200).send(cars);
// })




// update cars
// app.route('/api/updatecar/:carindex').put((req,res)=>{
//     let {carindex} = req.params;
//   const {name} = req.body;
//     carindex = Number(carindex);
//     if(!cars[carindex]){
//         res.status(404).send("not found");
//     }
//     cars[carindex] = name;
//     res.status(200).send(cars);
// })




// delete cras
// app.route('/api/deletecar/:carindex').delete((req,res)=>{
//     let { carindex }= req.body;
//      carindex = Number(carindex);
//      if(!cars[carindex]){
//         res.status(404).send("not matched")
//      }
//     cars.splice(carindex,1);
//     res.status(200).send(cars);
// })


// get car by index
// app.route('/api/getcar/:carindex').get((req, res) => {
//     let { carindex } = req.params; 
//     carindex = Number(carindex);
// if (!cars[carindex]) {
//         return res.status(404).send("Car not found"); 
//     }
// return res.status(200).send( cars[carindex] );
// });




// Data on webpage
// app.route('/cars').get((req,res)=>{
//     res.render('car',{cars});
// })

app.listen(port, ()=> console.log("server is active") );

