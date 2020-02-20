var service = require('../services/pdv')
module.exports = (app) =>{
    app.get('/pdv/:id',(req,res,next)=>{
        var id = Number.parseInt(req.params['id']);
        if(id > 0){
            return service().findById(id).then((result)=>{
                return res.status(200).send({status: "ok", item: result});
            }).catch((error)=>{
                console.log(`Error:[Add]: ${error} `);
                return res.status(500).send({status: "Error" });
            })
        } else {
            return res.status(401).send({status: "not found"})
        }
    });

    app.get('/pdv/search/:lng/:lat',(req,res,next)=>{
        var lng = Number.parseInt(req.params['lng']);
        var lat = Number.parseInt(req.params['lat']);
        if(lng > 0 && lat> 0){

        } else {
            return res.status(401).send({status: "not found"})
        }
    });

    app.post('/pdv',(req,res,next)=>{
        var item = req.body ;
        if(item){
            return service().add(item).then((result)=>{
                return res.status(200).send({status: "ok", item: result});
            }).catch((error)=>{
                console.log(`Error:[Add]: ${error} `);
                return res.status(500).send({status: "Error" });
            })
        } else {
            return res.status(401).send({status: "not found"});
        }
    });
}