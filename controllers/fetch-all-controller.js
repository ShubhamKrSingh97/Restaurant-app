const Orders=require('../models/Orders');

module.exports=async (req,res)=>{
    const allOrders=await Orders.getAllOrders();
    res.status(202).json(allOrders);
};