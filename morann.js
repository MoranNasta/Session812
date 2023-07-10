const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./names.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  

   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[0]])
   temp.forEach((res) => {
      data.push(res)
   })

// Printing data
//console.log(data)
var express = require('express')
var cors = require('cors')
var app = express()
 


app.get('/', function (req, res) {
    res.send(data)
  })
  
  app.listen(3030)