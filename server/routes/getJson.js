const express = require('express');
const fs = require('fs');
const one = require('../json/1.json');
const two = require('../json/2.json');
const three = require('../json/3.json');
const four = require('../json/4.json');
const five = require('../json/5.json');
const six = require('../json/6.json');
const seven = require('../json/7.json');
const eight = require('../json/8.json');
const nine = require('../json/9.json');
const ten = require('../json/10.json');

const router = express.Router();

/*function readJsonFileSync(filepath, encoding){
    if(typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    let file = fs.readFileSync(filepath,encoding);
    return JSON.parse(file);
}

function getConfig(file){
    let filepath = __dirname + '../json' + file;
    return readJsonFileSync(filepath);
}*/



// Get Json files into json format
router.get('/', async (req, res, next) => {
    let myFiles = [ one, two, three, four, five, six, seven, eight, nine, ten];
    
    res.setHeader('Content-Type', 'application/json');
    res.json(myFiles);
});

module.exports = router;