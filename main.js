angular.module('bookStore', ['ngRoute'])
.controller('BookListController', function($scope, $http){
	$scope.books = [
		{name: "About the History of Rajputana", price: 100, author: "Randeep Singh"}, 
		{name: "Steve Jobs Biography", price: 150, author: "Warren Almeny"}, 
		{name: "Bill Gates The Autobiography", price: 140, author: "Steve Jobs"}, 
	];

	$scope.buyBook = function(book){
		// call API of Paypal and handle the request
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
		$http({
			url: "http://localhost:3002/api/v1/buy_books", 
			method: "POST",
			data: {
				price: book.price
			}
		}).then(function(response){
			console.log(response);
		},
		function(error){
			console.log(error);
		});
	};	

})