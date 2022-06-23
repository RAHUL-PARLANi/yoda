import jwt from 'jsonwebtoken'
import config from './config'
import userModel from './models/userModel'
const  getToken = (user)=>{
  return jwt.sign({
    _id: user._id,
    name: user._name,
    email: user._email,
    isAdmin: user._isAdmin,
  } , config.JWT_SECERT,{
      expiresIn:'48h'
  })
}
export{
    getToken
}