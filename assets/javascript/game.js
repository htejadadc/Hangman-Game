var movies = ["ARMAGEDDON", "JOHN WICK", "TAKEN", "SUPERMAN"];
var moviePick = movies [Math.floor(Math.random() * movies.length)];
var newWord = moviePick.split("");
var assembly = new Array(newWord.length);
var lettersGuessed = [];
var remaining = 20;
var wins = 0;

for (var i = 0; i < assembly.length; i++) {
	assembly[i] = "_ ";
}

function lettersPosition() {
	for (var i = 0; i < assembly.length; i++) {
		var cword = document.getElementById("cword");
		var cwordUpdate = document.createTextNode(assembly[i]);
		cword.appendChild(cwordUpdate);
	}
}

function ScoreCounter() {
	var tabulator = true;
	for (var m = 0; m < assembly.length; m++) {
		if (assembly[m] === "_ ") { 
			tabulator = false;
		}
	}
					
	if (tabulator) {
		wins++;
		var winsUpdate = document.getElementById ("wins");
		winsUpdate.textContent = wins;			
	}				
}

document.onkeyup = function (event) {
	var userTry = event.key.toUpperCase();	
	lettersGuessed.push(userTry);
	console.log (lettersGuessed)
	var picked = true;
	for (var k = 0; k < lettersGuessed.length; k++) {
		if (userTry === lettersGuessed[(k-1)]) {
			picked = false;	
		}
	}			

	if (picked) {
			var letters = document.getElementById ("letters");
			var	lettersUpdate = document.createTextNode (userTry + ", ");
			letters.appendChild(lettersUpdate);
			remaining--;
			var remainingUpdate = document.getElementById("remaining");
			remainingUpdate.textContent = remaining;		
	}
		
	for (var j = 0; j < newWord.length; j++) {
		if (userTry === newWord[j]) {
			assembly [j] = newWord[j];
			var cword = document.getElementById ("cword");
			cword.innerHTML = "";
			lettersPosition();
			ScoreCounter();										
		}
	}				
};
