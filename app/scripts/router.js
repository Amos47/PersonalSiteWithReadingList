Personalsite.Router.map(function () {
  // Add your routes here
  this.resource('books', {path: '/readingList'});
  this.resource("book", {path: "/readingList/:id"});
});
