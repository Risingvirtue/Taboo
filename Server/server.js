var express = require('express');

var fs = require('fs');

var app = express();

app.use(express.static('public'));

app.get('/:fileName', function(req, res) {
  console.log('../words/' + req.params.fileName + '.txt');
	fs.readFile('../words/' + req.params.fileName + '.txt', 'utf8', function(err, data) {
    console.log(err, data);
    if (err) res.send(err);
    res.send(data.toString());
  })
});


var listener = app.listen(8000, function() {
	console.log('Your app is listening on port ' + listener.address().port);
})
