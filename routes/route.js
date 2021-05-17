const router = require('express').Router()
const nodeMailer = require('nodemailer')

router.post('/contact',async(req,res)=>{
    let transporter = await nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject:'Project Details',
        text: 'Name: '+req.body.name+'\n Email: '+req.body.email+'\n Project: '+req.body.project+'\n Message: '+req.body.message 
    }

    transporter.sendMail(mailOptions)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json(err)
    })
})

module.exports = router;
