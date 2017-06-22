var bodyParser = require('body-parser')
var express = require('express');
var app = express();
const PORT = process.env.PORT || '3000';

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
  res.render('main');
});

app.listen(PORT, function(req, res){
    console.log('Server connection, port : ',PORT);
});
