const Orders=require('../models/Orders');

module.exports=async (req,res)=>{
    try{
        await Orders.deleteOrder(req.params.id);
        res.send();
    }
   catch(err){
    comsole.log(err);
   }
 }