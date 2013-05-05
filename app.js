/**
 * Module dependencies.
 */
var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, http = require('http')
	, path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/about_us', function(req, res){
	// res.redirect('/about_us',{
		// title: 'Todos about_us view' });
// });
app.get('/about_us', function(req, res){
	res.render('about_us', {
		title: 'About Us'
	});
});
app.get('/contact_us', function(req, res){
	res.render('contact_us', {
		title: 'Contact Us'
	});
});
app.get('/web_development', function(req, res){
	res.render('web_development', {
		title: 'Web Development'
	});
});
app.get('/', routes.index);
// app.get('/users', user.list);