const express=require('express');
const router= express.Router();
const addOrderController=require('../controllers/add-order-controller');

router.post('/add-order',addOrderController);
module.exports=router;