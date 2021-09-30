var mysql=require('mysql');
var con=mysql.createConnection({
    localhost:"host",
    user:"root",
    password:"Root@123",
    database:"mydbconnection"
});
con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected");
    var sql="select name from customers";
    con.query(sql,function(err,result)
    {
        if(err)throw err;
        console.log(result);
    })
})