const express = require ('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(error);
            res.status(500).send(err)
        } else{
            var obj = JSON.parse(data)
        res.json(obj.items)
        }
});

router.get('/:items', (req, res) => {
    res.send(`One items with id ${req.params.items}`);
});
router.get('/:itemid', (req, res) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            var obj = JSON.parse(data);
            obj.items.push({itemid:req.body.itemid,label:req.body.label, image:req.body.image, description:req.body.description});
            var json = JSON.stringify(obj, null, 4);
            fs.writeFile('data.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.json(obj.items)
            });
        }
    })
    res.send(`L'id de l'item est  ${req.params.itemsid}`);
});

router.post('/', (req, res) => {    
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            var obj = JSON.parse(data);
            obj.items.push({itemid:req.body.itemid,label:req.body.label, image:req.body.image, description:req.body.description});
            var json = JSON.stringify(obj, null, 4);
            fs.writeFile('data.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.json(obj.items)
            });
        }
    })
});
router.delete('/:itemid',(req, res)=>{
    fs.readFile('data.json', 'utf-8', (err, data)=>{
        if (err){
            console.error(err);
            res.status(500).send(err)
        }else{
            console.log(data);
            var obj = JSON.parse(data)
            obj.items = obj.items.filter(items =>{
                if (items.itemid === req.params.itemid) { return false
                }else {return true} 
            })
            var json = JSON.stringify(obj, null, 4);
            fs.writeFile('data.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.send(true)
                
            });
           
        }

    })
})
})


module.exports = router;