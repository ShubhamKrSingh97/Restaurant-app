const express=require('express');
const router= express.Router();
const deleteOrderController=require('../controllers/delete-order-controller');

router.delete('/delete-order/:id',deleteOrderController);

 module.exports=router;