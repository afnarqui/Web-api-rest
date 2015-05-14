module.exports = function(app){
	app = app || {} 

	var SerieTV = require('./serietv.js');

	// GET  
	var fundAllSeriesTV = function(req,res){
		SerieTV.find(function(err,seriestv){
			if(!err){
				res.send(seriestv);
			}
			else
			{
				console.log('Error:' + err );
			}
		});
	}

	// GET
	var findByID = function(req,res){
		SerieTV.findByID(req.param.id,function(err,serietv){
			if(!err){
				res.send(serietv);
			}
			else
			{
				console.log('Err:' + err );
			}
		});
	}

	// POST

	 addSerieTV = function(req,res){
		console.log('POST');
		console.log(req.body);

		var serietv = new SerieTV({
				titulo : req.body.titulo,
				temporadas: req.body.temporadas,
				pais : req.body.pais,
				genero : req.body.genero 
				});
		
			serietv.save(function(err){
			if(!err){
				console.log('Serie guardada');
			}
			else
			{
				console.log('Error:' + err);
			}


		

	
		});

		res.send(serietv);
	};

	var updateSerieTV= function(req,res){
		SerieTV.findByID(req.params.id,function(err,serietv){
			serietv.titulo = req.body.titulo;
			serietv.temporada = req.body.temporada;
			serietv.pais = req.body.pais;
			serietv.genero = req.body.genero;
		});

		serietv.save(function(err){
			if(!err){
				console.log('serietv actualizada');
			}
			else
			{
				console.log('Error' + err);
			}
		});

		}


	var	deleteSerieTV = function(req,res){
			SerieTV.findByID(req.params.id,function(err,serietv){
				serietv.remove(req.params.id,function(err,serietv){
				if(!err){
					console.log('Serietv borrada');

				}
				else
				{
					console.log('Error:' +  err);
				}
				});
			});
		}

	app.get('/seriestv',fundAllSeriesTV);
	app.get('/seriestv/:id',findByID);
	app.post('/seriestv',addSerieTV);
	app.put('/seriestv/:id',updateSerieTV);
	app.delete('/seriestv/:id',deleteSerieTV);
	
}

