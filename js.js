//Ingredients Array with measurements
var ingredients = [
	'32 oz cream cheese (softened to room temperature)',
	'1 cup sugar',
	'2/3 cups sour cream',
	'1 1/2 teaspons vanilla extract',
	'1/8 teaspoon salt',
	'4 large eggs (room temperature, lightly beaten)'
];

//declare var of length of ingredients array
var ingredientsLength = ingredients.length;

var table = document.getElementById("myTable"); //finding the table element
//text = ingredients[0];
var text1 = "";

//Peform the for loop
for (i = 0; i < ingredientsLength; i++) {
	var row = table.insertRow(-1);
	var cell = row.insertCell(0);
	text1 += ingredients[i] + "<br>";	
	}
document.getElmentById("recipeOutput").innerHTML = text1;

var text2 = "";
for (i = 0; i < ingredientsLength; i++) {
	alert(i)
	var row = table.insertRow(-1);
	var cell = row.insertCell(0);
	text2 += ingredients[i] + '<br>';	
}
document.getElementById("table").innerHTML = text2;
