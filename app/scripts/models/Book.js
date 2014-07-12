Personalsite.Book = DS.Model.extend({
	title: DS.attr("stirng"),
	subTitle: DS.attr("string", {defaultValue: null}), 
	//TODO: convert authors to a model object
	author: DS.attr("string"), 
	isbn: DS.attr("string", {defaultValue: null}),
	coverImage: function(){
		var img = Personalsite.preloadBookImage(this.get('isbn'));
		console.log(img);
		return img.src;
	}.property('isbn'),
	comments: DS.attr("string")
});

Personalsite.preloadBookImage = function(isbn){
	var img = new Image();
	img.src = "http://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg?default=false";
	return img;
};

Personalsite.Book.ApplicationAdapter = DS.FixtureAdapter.extend({});

Personalsite.Book.FIXTURES = [
	{
		id: 1,
		title: "Outliers",
		author: "Malcolm Gladwell",
		isbn: "0316017922",
		comments: "Great book. I loved the explaiations of how small advantages can build up over time"

	},
	{
		id:2,
		title: "The Happiness Adavantage",
		subTitle: "The Seven Principles of Positive Psychology That Fuel Success and Performance at Work", 
		author: "Shawn Anchor",
		isbn: "0307591549",
		comments: "This book is a great introduction to the effects on positive psychology, on life and success. The greatest predictor of future success is curent happiness, so be happy."
	},
	{
		id:3,
		title: "All the Rave",
		subTitle: "The Rise and Fall of Shawn Fanning's Napster",
		author: "Joseph Menn",
		isbn: "0609610937",
		comments: "This is a really cool insight on a fantastic story of how a couple of kids disrupted an entrenched industry."
	},
	{
		id:4,
		title: "Start With Why", 
		subTitle: "How Great Leaders Inspire Everyone to Take Action", 
		author: "Simon Sinek", 
		isbn: "1591846447",
		comments: "This is one of my favorite books. An absolute must read for anyone who does anything. Uncovering the underlying reasons for things is a valuable skill so that we can solve the real problems. This book teaches you how to look past the cosmetics of any situation, to uncover the why."
	},
	{
		id:5,
		title: "Venture Deals",
		subTitle: "Be Smarter Than Your Lawyer and Venture Capitalist", 
		author: "Brad Feld, Jason Mendelson, and Dick Costolo", 
		isbn: "0470929820",
		commnents: "Very technical for a novice in the legal realm. This book provides a very good overview of legalities(in the U.S.) for aspiring entrepreneurs. The book tries to give a good overview without becoming so technical that only lawyers can understand."
	},
	{
		id:6,
		title: "The $100 Startup",
		subTitle: "Reinvent the Way You Make a Living, Do What You Love, and Create a New Future", 
		author: "Chris Guillebeau",
		isbn: "0307951529", 
		comments: "Great set of stories that the author has collected about people who have started (motly small) businesses with less than $100. These entrepreneurs typically have very little to no experience or expertise in the field they have pursued. This book is a good resource to learn from the stories and experiences of other entrepreneurs."
	}
];


