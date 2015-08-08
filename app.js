var express = require('express');
var app = express();
var cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('hello', { name : 'World' });
});

app.get('*', function(req, res){
  res.render('hello', { name : req.url.substr(1, req.url.length) });
});

app.listen(process.env.PORT || 5000);

