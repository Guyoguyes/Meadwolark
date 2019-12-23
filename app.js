var express = require('express');
var chalk = require('chalk');


var app = express();
var port = 3000;

var fortune = require('./lib/fortune')



//set up handlebars view engine
var handlebars = require('express3-handlebars')
        .create({defaultlayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

app.use(function(req, res, next){
    res.locals.showTest = app.get('env') !== 'production' && req.query.test === '1';
})

app.get('/', function(req, res){
    // res.type('text/plain');
    // res.send('Meadowlark Travel')
    res.render('home')
});

app.get('/about', function(req, res){
    res.render('about', {fortune: fortune.getFortune() })
});



// static Files
app.use(express.static(__dirname + '/public'));


//custom 404 page
app.use((req, res) =>{
    // res.type('text/plain');
    res.status(404);
    res.render('404')
})

// custom 500 page 
app.use(function(err, req, res, next){
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500)
    res.render('500');
});

// Server Listening
app.listen(port, () =>{
    console.log(chalk.blue('------Server Started--------'));
    console.log('Server running at localhost: '+port);
    console.log(chalk.yellow('-----Made with LOVE by Guyo------'))
})