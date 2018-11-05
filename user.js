const express = require ('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All user');
});

router.get('/:userid', (req, res) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            var obj = JSON.parse(data);
            obj.user.push({userid:req.body.id,name:req.body.name, password:req.body.password});
            var json = JSON.stringify(obj, null, 4);
            fs.writeFile('data.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.json(obj.user)
            });
        }
    })
    res.send(`L'id de l'utilisateur est  ${req.params.userid}`);
});

router.post('/', (req, res) => {    
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            var obj = JSON.parse(data);
            obj.user.push({userid:req.body.userid,name:req.body.name, password:req.body.password});
            var json = JSON.stringify(objobj, null, 4);
            fs.writeFile('data.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.json(obj.user)
            });
        }
    })
});
router.delete('/:userid',(req, res)=>{
    fs.readFile('data.json', 'utf-8', (err, data)=>{
        if (err){
            console.error(err);
            res.status(500).send(err)
        }else{
            console.log(data);
            var obj = JSON.parse(data)
            obj.user = obj.user.filter(user=>{
                if (user.userid === req.params.userid) { return false
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
router.put('/',(req, res)=>{

})

module.exports = router;