var http = require('http');
var url = require('url');
var fs = require('fs');
var data;

fs.readFile('./demo_file.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});


/*
fs.writeFile('new_html.txt', "This file has been newly overwritten", function(err) {
  if (err) throw err;
  console.log("The file has been overwritten");
})
*/

fs.appendFile('new_html.txt', data, function(err, data) {
  if (err) throw err;
  console.log("Saved!");
});



/*
fs.unlink('new_html.txt', function(err) {
  if (err) throw err;
  console.log("File Deleted!");
})
*/
