import express from 'express'
import { sequelize, Product } from './models/index.js';

const app = express()

app.get('/',(req,res)=>{
    res.json({id:1,name:'Iphone16',price:7885.5})
})



await sequelize.authenticate();           // verify DB creds
 await sequelize.sync({alter: true});                // only if you’re NOT using migrations

const p = await Product.create({ name: 'Demo', code: 'DEM-1', price: 9.99 });
console.log('created:', p.id);
app.listen(3000,()=>console.log('server started'))
