const express = require('express');
const router = express.Router();
// Demonstration values only. Replace with a verified live market-data source before real-world use.
const prices = [
 {crop:'Wheat',market:'Sample market',price:2425,unit:'₹/quintal',change:'+1.8%',trend:'up'},
 {crop:'Rice',market:'Sample market',price:3180,unit:'₹/quintal',change:'+0.6%',trend:'up'},
 {crop:'Mustard',market:'Sample market',price:5650,unit:'₹/quintal',change:'−0.4%',trend:'down'},
 {crop:'Maize',market:'Sample market',price:2180,unit:'₹/quintal',change:'+1.1%',trend:'up'},
 {crop:'Potato',market:'Sample market',price:1450,unit:'₹/quintal',change:'−2.2%',trend:'down'}
];
router.get('/',(req,res)=>res.json(prices));
module.exports=router;
