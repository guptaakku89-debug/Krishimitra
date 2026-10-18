const express = require('express');
const router = express.Router();
// In-memory demo storage: feedback disappears when the server restarts. Use a database for persistence.
const messages = [];
router.post('/',(req,res)=>{const name=String(req.body.name||'').trim().slice(0,80);const topic=String(req.body.topic||'Other').trim().slice(0,80);const message=String(req.body.message||'').trim();if(message.length<5)return res.status(400).json({error:'Message must be at least 5 characters long.'});if(message.length>1500)return res.status(400).json({error:'Message must be 1500 characters or fewer.'});const entry={id:Date.now(),name,topic,message,createdAt:new Date().toISOString()};messages.push(entry);res.status(201).json({message:'Feedback received',feedback:{id:entry.id,topic:entry.topic,createdAt:entry.createdAt}})});
// Intentionally no public GET route for user-submitted messages.
module.exports=router;
