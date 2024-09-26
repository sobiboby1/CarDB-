const cars = require('../../modes/index');

module.exports = {

addacar: function (req,res){
    let {name} = req.body;
    cars.push(name);
    res.status(201).send("car added")
},

  showcar: function(req,res){
    console.log({cars})
res.status(200).send(cars);
},
  updatecar: function(req,res){
    let {carindex} = req.params;
  const {name} = req.body;
    carindex = Number(carindex);
    if(!cars[carindex]){
        res.status(404).send("not found");
    }
    cars[carindex] = name;
    res.status(200).send(cars);
  },

deletecar: function (req,res){
    let { carindex }= req.params;
    carindex = Number(carindex);
    if(!cars[carindex]){
       res.status(404).send("not matched")
    }
   cars.splice(carindex,1);
   res.status(200).send(cars);
 
},
  showcarbyid: function(req,res){
    let { carindex } = req.params; 
    carindex = Number(carindex);
if (!cars[carindex]) {
        return res.status(404).send("Car not found"); 
    }
 return res.status(200).send( cars[carindex] );
  },
webpage: function(req,res){
    res.render('car',{cars});
}

}