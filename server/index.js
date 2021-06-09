const express = require('express')
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "ashabala1",
    database: "crudreact",
})

const app = express()
const PORT = 5000;

app.get("/",(req,res) => {
    const sqlInsert = "INSERT INTO movie-review(movieName , movieReview) VALUES ('inseption','it was a good movie');"
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello")
    })
    
})
app.listen(PORT,() =>console.log(`PORT is running at ${PORT}`))