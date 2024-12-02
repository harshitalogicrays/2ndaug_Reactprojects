import express from 'express'
import cors from 'cors'
import Stripe from 'stripe' 
import 'dotenv/config'

const app = express()
const stripe = new Stripe(process.env.STRIPE_SK)
app.use(express.json())
app.use(cors())
//http://localhost:4000
// app.get('/',(req,res)=>{
//     res.send({message:"Hello from server"})
// })

// app.post('/',(req,res)=>{
//    res.send(req.body)
// })

app.post('/create-payment-intent',async(req,res)=>{
    let {amount} =req.body
    try{
       const paymentIntents  = await stripe.paymentIntents.create({
            amount,
            currency:"usd",
            payment_method_types:['card']
        })
        res.status(200).json({clientsecret:paymentIntents.client_secret})
    }
    catch(err){res.status(500).json({message:"Not able to initialize payment"})}
})

const port = process.env.PORT || 2000
app.listen(port,()=>console.log(`Server started at http://localhost:${port}`))
