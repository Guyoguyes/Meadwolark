var express = require('express');

var app = express();
var port = 3000;

//set up handlebars view engine
var handlebars = require('express3-handlebars')
        .create({defaultlayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];

app.get('/', function(req, res){
    // res.type('text/plain');
    // res.send('Meadowlark Travel')
    res.render('home')
});

app.get('/about', function(req, res){
    var randomFortune = 
                fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune: randomFortune})
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
    console.log('------Server Started--------');
    console.log('Server running at localhost: '+port);
    console.log('Press Ctrl-c to terminate server')
})