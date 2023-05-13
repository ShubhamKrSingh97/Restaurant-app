const express=require('express');
const router= express.Router();
const fetchAllController=require('../controllers/fetch-all-controller');

router.get('/fetch-all',fetchAllController);

module.exports=router;