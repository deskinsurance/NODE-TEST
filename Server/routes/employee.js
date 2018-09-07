var db = require("../core/db");
var util = require("util");
var express = require('express');
var router = express.Router();
var SQL=require('mssql');
var app=express();
/* GET List of employee. */
router.get('/', function(req, res) {
  var sqlParams = [];
    db.excecuteSql("getEmployee",sqlParams ,function (data, err) {
    if(err)
    return res.status(500).send(err);
    else
    res.send(data);
  });
});
/*update */
//router.put('/api/employees/:id',(req,res)=>{
  router.put('/',(req,res)=>{ 
  if (!req.body) throw new Error("Input not valid");
  if (!req.body.empid) throw new Error("empid not provided.");
    var sqlParams = [];

    var forenameParam = {
      name: 'empID',
      type: SQL.Int,
      value:parseInt(req.body.empID)
      }
      sqlParams.push(forenameParam);

      var forenameParam = {
        name: 'Name',
        type: SQL.VarChar(50),
        value:req.body.Name
        }
        sqlParams.push(forenameParam);

        db.excecuteSql("UpdateEmployee",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
//insert
router.post('/',(req,res)=>{
  if (!req.body) throw new Error("Input not valid");
    var sqlParams = [];
 
    var forenameParam = {
          name: 'Name',
          type: SQL.VarChar(50),
          value:req.body.Name
          }
          sqlParams.push(forenameParam);

          var forenameParam = {
            name: 'EmpCode',
            type: SQL.VarChar(50),
            value:req.body.EmpCode
            }
            sqlParams.push(forenameParam);

            var forenameParam = {
              name: 'Salary',
              type: SQL.Int,
              value:req.body.Salary
              }
              sqlParams.push(forenameParam);
        
          
      db.excecuteSql("AddEmployee",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
//delete
router.delete('/',(req,res)=>{
  if (!req.body) throw new Error("Input not valid");
  if (!req.body.empid) throw new Error("empid not provided.");
    var sqlParams = [];
      var forenameParam = {
        name: 'empID',
        type: SQL.Int,
        value:parseInt(req.body.empid)  
        }
        sqlParams.push(forenameParam);
      db.excecuteSql("DeleteEmployee",sqlParams, function (data, err) {
      if(err)
      return res.status(500).send(err);
      else
      res.send(data);
    }); 
});
module.exports = router;
