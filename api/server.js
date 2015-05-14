var express = require('express');
var mongoose = require('mongoose');
var app = express();



mongoose.connect('mongodb://localhost/seriestv',function(err,res){
	if(err){
		console.log('Error: conect' +  err);
	}
	else
	{
		console.log('conexion bd');
	}
});

app.configure = function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
};	


app.get('/',function(req,res){
	res.send('funcional');
});

require('./router')(app);

app.listen(5000);
console.log('servidor express escuchando en el puerto 5000');






