var express = require('express');
var app = express();
var cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('hello', { name : 'World' });
});

app.get('*', function(req, res) {
  console.log(req.params);
  res.render('hello', { 
    name : req.params[0].
    substring(1, req.params[0].length).
    split('/').
    join(', ') 
  });
});

app.listen(process.env.PORT || 5000);
console.log('Express server started on port', process.env.PORT || 5000);

