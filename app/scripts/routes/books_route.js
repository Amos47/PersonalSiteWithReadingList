Personalsite.BooksRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('book');
	}
});

Personalsite.BookRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('book', params.id)
	}
}); 