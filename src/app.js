import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.json({id:1,name:'Iphone16',price:7885.5})
})

app.listen(3000,()=>console.log('server started'))
