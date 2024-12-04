import express from 'express'
import cors from 'cors'
import Stripe from 'stripe' 
import 'dotenv/config'
import nodemailer from 'nodemailer'

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

//mail
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", port: 587,
    secure: false, // true for port 465, false for other ports
    auth: { user: process.env.USER,
      pass:process.env.PWD },});

app.post('/sendmail',async(req,res)=>{
    let {amount,email,name,payment,status} = req.body
    try{
        await transporter.sendMail({
            from: `"Admin 👻" ${process.env.USER}`, // sender address
            to: email, // list of receivers
            subject: `your order has been ${status}`, // Subject line
            html: `Hello ${name} <br/>
                        <b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
                          Order Status : ${status}<br/>
                          Payment:${payment}<br/>
                          Thank You<br/>Admin `, // html body
          });  
          res.status(200).json({message:"mail sent successfully"})  }
    catch(err){
        res.status(500).json({message:"Not able to send mail"}) }
})

const port = process.env.PORT || 2000
app.listen(port,()=>console.log(`Server started at http://localhost:${port}`))
