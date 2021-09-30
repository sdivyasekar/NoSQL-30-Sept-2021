var mysql=require('mysql');
var con=mysql.createConnection({
    localhost:"host",
    user:"root",
    password:"Root@123",
    database:"mydbconnection"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Preethi', 'Namakkal')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      /*Use the result object to get the id:*/
      console.log("1 record inserted, ID: " + result.insertId);
    });
  });
  