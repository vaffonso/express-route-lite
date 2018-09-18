var express = require('express');
var app = express();
const port = 3000;

app.post('/imagem', function(req, res){
  console.log(`I just received a POST request on port ${port}!`);
  res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
