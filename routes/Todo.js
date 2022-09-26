const express=require("express");
const router = express.Router()

router.get('/',function(){
    console.log('Get request')
})
module.exports=router