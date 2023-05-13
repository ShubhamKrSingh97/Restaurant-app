const Orders=require('../models/Orders');

module.exports=async (req,res)=>{
    const obj=new Orders(req.body.dish,req.body.table);
    const order=await obj.addOrder();
    res.status(202).json(order);
}