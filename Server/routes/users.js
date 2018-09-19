var db = require("../core/db");
var util = require("util");
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var SQL=require('mssql');
var app=express();

/* User Login */
router.get('/', function(req, res) {
  var sqlParams = [];
  db.excecuteSql("USP_UserLogin",sqlParams ,function (data, err) {
  if(err)
  return res.status(500).send(err);
  else
  res.send(data);
});
});


router.post('/login', function(req,res,next){
    var sqlParams = [];
  var forenameParam = {
    name: 'UserName',
    type: SQL.VarChar(50),
    value:req.body.UserName
    }
    sqlParams.push(forenameParam);
    var forenameParam = {
      name: 'Password',
      type: SQL.VarChar(50),
      value:req.body.Password
      }
      sqlParams.push(forenameParam);
db.excecuteSql("USP_UserLogin_Chk",sqlParams ,function (data, err) {
if(err)
return res.status(500).send(err);
else
{
  if(data[0][0].count>0)
  {
    let token = jwt.sign({UserName:req.body.UserName},'secretkey', {expiresIn : '1h'});
    return res.status(200).json(token);
  }
  else
   return res.status(501).json({message:'Invalid Credentials'}); 
}
});
});

router.get('/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.UserName);
});
var decodedToken='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secretkey', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}
module.exports = router;
