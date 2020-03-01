const express = require('express');
const db = require('./data/dbConfig.js');
const server = express();

server.use(express.json());

server.get("/", (req,res,next) => {
   res.status(200).json({
      msg:' App is up and running now'
   })
})

server.get("/api/accounts", async (req,res,next) => {
    try {
      const accounts = await db.select("*").from("accounts");
      if(accounts) res.json(accounts);
    }catch(err) {
      next(err);
    }
});

server.get("/api/accounts/:id", async (req,res,next) => {
  try {
     const id = req.params.id;
     const account = await db.select("*").from("accounts").where("id",id).first();
     if(account) res.status(200).json(account);

  }catch(err) {
    next(err);
  }
});

server.post("/api/accounts", async (req,res,next) => {
  try {

  }catch(err) {
    next(err);
  }
});

server.put("/api/accounts/:id", async (req,res,next) => {
  try {

  }catch(err) {
    next(err);
  }
});

server.delete("/api/accounts/:id", async (req,res,next) => {
  try {

  }catch(err) {
    next(err);
  }
});

server.use( (req,res,next) => {
    res.status(404).json({
       msg: 'No route found'
    });
});

server.use((err, req,res,next) => {
   res.status(500).json({
      msg:'Something went wrong with the server'
   })
})

module.exports = server;