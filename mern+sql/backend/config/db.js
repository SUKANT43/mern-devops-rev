const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'4794',
    database:'demo',
    port:3306
})

function db(){
    connection.connect((err)=>{
        if(err){
            console,log("connection error:"+err)
        }
        else{
            console.log("db connected")
        }
    })
}

module.exports=db