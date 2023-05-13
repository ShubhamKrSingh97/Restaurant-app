const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Data=sequelize.define('orders',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    dish:{
        type:Sequelize.STRING,
        allowNull:false
    },
    tableNo:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=class Orders{
    constructor(dish,table){
        this.dish=dish;
        this.table=table;
    }

    addOrder(){
        return Data.create({
            dish:this.dish,
            tableNo:this.table
        });
    }
    static getAllOrders(){
        return Data.findAll();
    }
    static deleteOrder(ID){
        return Data.destroy({
            where:{
                id:ID
            }
        });
    }
}