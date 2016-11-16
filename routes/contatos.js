var express = require('express');
var router = express.Router();
module.exports = function(knex) {

  router.get("/", function(req,res){
    knex("contatos").select().then( function(result){
      res.json(result);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  router.get("/:idrow", function(req,res){
    knex("contatos").where({'idcontato': req.params.idrow}).select().then( function(result){
      res.json(result);
    }).catch(function(err){ res.status(500).send(err); });
});

  router.post("/", function(req,res){
    var novocont = req.body;
    knex("contatos").insert(novocont,"idcontato").then(function(retid){
      res.send("Contato salvo com id "+retid);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  router.put("/:idrow", function(req,res) {
    knex("contatos").where({'idcontato':  req.params.idrow}).update(req.body).then(function(result) {
      res.json(result);
    }).catch(function(err) { res.status(500).send(err); });
  });
  

  router.delete("/:idrow", function(req,res) {
     knex("contatos").where({'idcontato': req.params.idrow}).del().then(function(result) {
       res.json(result);
     }).catch(function(err) { res.status(500).send(err); });
  });

  return router;
}
