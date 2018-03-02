// this is route.js all of our backend routing will go through this file.

// first we get our requires out of the way, which includes all our controllers
const animals = require('../controller/animals.js');

// module.exports defines the OTHER SIDE of a require() statement.
// anything put on the other side of the equal sign will be returned
// when this file is run with require()

// in this case, module.exports returns a function that takes app!
module.exports = function(app){

//  ===== Set up Routes =======
app.get('/', function(request, response) {
	animals.showAll(request, response);
});

app.get('/animal/new', function(request, response) {
	response.render('new');
});

app.get('/animals/:id', function(request, response) {
	animals.showAnimal(request, response);
});

app.get('/animals/edit/:id', function(request, response) {
	animals.showEditAnimal(request, response);
})

app.post('/animals', function(request, response) {
	animals.createAnimal(request, response);
});

app.post('/animals/:id', function(request, response) {
	animals.updateAnimal(request, response);
});

app.post('/animals/destroy/:id', function(request, response) {
	animals.killAnimal(request, response);
});
}
