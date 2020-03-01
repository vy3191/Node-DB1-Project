const express = require('express');
const db = require('./data/dbConfig.js');
const server = express();

server.use(express.json());

server.get("/api/accounts", async (req,res,next) => {
    try {

    }catch(err) {
      next(err);
    }
});

server.get("/api/accounts/:id", async (req,res,next) => {
  try {

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

server.use((req,res,next,err) => {
   res.status(500).json({
      msg:'Something went wrong with the server'
   })
})

module.exports = server;