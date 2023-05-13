const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const sequelize=require('./util/database');
const cors=require('cors');
const path=require('path');
const addOrderRoute=require('./routes/add-order-route');
const deleteOrderRoute=require('./routes/delete-order-route');
const fetchAllRoute=require('./routes/fetch-all-route');
const fs=require('fs');

app.use(cors());
app.use(bodyParser.json({encoded:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(addOrderRoute);

app.use(deleteOrderRoute);

app.use(fetchAllRoute)

//base url req
app.get('/',(req,res)=>{
    fs.readFile(path.join(__dirname,'views','index.html'),{encoding:'utf-8'},(err,result)=>{
        res.send(result);
    })
})

sequelize.sync().then(result=>{
    app.listen(5000);
})
