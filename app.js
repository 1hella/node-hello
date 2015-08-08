var express = require('express'),
    app = express(),
    cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('hello', { name : 'World' });
});

app.get('*', function(req, res){
  console.log(req);
    res.render('hello', { name : req.url.substr(1, req.url.length) });
});

app.listen(8080);
console.log('Express server started on port 8080');