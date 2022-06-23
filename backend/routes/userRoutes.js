import express from "express";
import User from "../models/userModel";
const router =express.Router();

router.post('/signin',async (req,res) =>{
    const signUser =await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(signUser)
    {
      res.send({
          _id:signUser.id,
          name:signUser.name,
          email:signUser.email,
          isAdmin:signUser.isAdmin,
          token:getToken(signUser)
      }) 
    }else{ res.send(401).send({msg:"Invalid Email or Password"}) };
})
router.get('/createadmin',async(req,res)=>{
    try {
        const user = new User({
            name:'rahul',
            email:'rahulparlani112@gmail.com',
            password:'12345',
            isAdmin:true
        });
       const newUser = await user.save();
       res.send(user);
        
    } catch (error) {
        res.send({msg: error.message})
    }
  
})
export default router