var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localholst",
  user: "AhmadTC",
  password: "Breezy2000"
});

con.connect (function(err) {
  if (err) {
    throw err;
  }
  else {
    console.log("Connected!");
  }
});
