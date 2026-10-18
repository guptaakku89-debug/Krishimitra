const express = require('express');
const router = express.Router();
const crops = [
 {id:1,name:'Wheat',hindi:'गेहूँ',season:'Rabi',soil:'Loamy, well-drained',water:'Moderate',duration:'120–150 days',tip:'Sow when temperatures cool; avoid standing water.',icon:'🌾'},
 {id:2,name:'Rice',hindi:'धान',season:'Kharif',soil:'Clay or loamy',water:'High',duration:'110–150 days',tip:'Choose a locally recommended variety and manage water carefully.',icon:'🌱'},
 {id:3,name:'Mustard',hindi:'सरसों',season:'Rabi',soil:'Sandy loam to loam',water:'Low–moderate',duration:'100–140 days',tip:'Timely sowing and balanced nutrition help improve yield.',icon:'🌼'},
 {id:4,name:'Maize',hindi:'मक्का',season:'Kharif / Spring',soil:'Well-drained loam',water:'Moderate',duration:'90–120 days',tip:'Avoid waterlogging and follow local spacing recommendations.',icon:'🌽'},
 {id:5,name:'Potato',hindi:'आलू',season:'Rabi / cool season',soil:'Loose, well-drained loam',water:'Moderate',duration:'90–120 days',tip:'Use healthy seed tubers and earth up plants as needed.',icon:'🥔'},
 {id:6,name:'Chickpea',hindi:'चना',season:'Rabi',soil:'Well-drained loam',water:'Low',duration:'100–120 days',tip:'Avoid excessive irrigation, especially near maturity.',icon:'🫘'}
];
router.get('/', (req,res)=>{let result=crops;const q=String(req.query.q||'').toLowerCase();const season=String(req.query.season||'').toLowerCase();if(q)result=result.filter(c=>`${c.name} ${c.hindi} ${c.soil} ${c.season}`.toLowerCase().includes(q));if(season)result=result.filter(c=>c.season.toLowerCase().includes(season));res.json(result)});
router.get('/:id',(req,res)=>{const crop=crops.find(c=>c.id===Number(req.params.id));if(!crop)return res.status(404).json({error:'Crop not found'});res.json(crop)});
module.exports=router;
