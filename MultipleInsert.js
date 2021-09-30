var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    database:"mydbconnection"
});
con.connect(function(err)
{
    if(err)throw err;
    console.log("Connected");
    var sql="Insert into customers(name,address) values?";
    var values=[
        ["John","salem"],
        ["Peter","chennai"],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
    ];
    con.query(sql,[values],function(err,result)
    {
        if(err)throw err;
        console.log("The number of records inserted is "+result);
    });
});