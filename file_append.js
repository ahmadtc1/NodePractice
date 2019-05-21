var http = require('http');
var url = require('url');
var fs = require('fs');
var data;

/*
http.createServer(function(req, res) {
  fs.readFile('demo_file.txt', function(err, data) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
*/

/*
fs.writeFile('new_html.txt', "This file has been newly overwritten", function(err) {
  if (err) throw err;
  console.log("The file has been overwritten");
})
*/

/*
fs.appendFile('new_html.txt', 'This file is being appended to', function(err, data) {
  if (err) throw err;
  console.log("Saved!");
});
*/

/*
fs.unlink('new_html.txt', function(err) {
  if (err) throw err;
  console.log("File Deleted!");
})
*/
