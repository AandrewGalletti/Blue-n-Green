/* Andrew Galletti
Date Edited: 10/4
Date Created: 10/4 */

 var bet = 0;
 var startingBet = 0;
 var highTotal = 0;
 var countAtHighRoll = 0;
 var totalRolls = 0;
 
	
function getBet(){
	validateBet();
	startingBet = bet;
	highTotal = bet;
}

function validateBet(){
	if (document.getElementById("bet").value < 1) { 
		bet = 0;
		alert("Bet is too low!");
	}
	else bet =  document.getElementById("bet").value;1
}

function displayResults(){
	document.getElementById("results").style.display = "block";
	document.getElementById("startingBet").innerText = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highTotal").innerText = "$"+highTotal+".00";
	document.getElementById("countAtHighRoll").innerText = countAtHighRoll;
}

function resetVars(){
	bet =  0;
	startingBet = 0;
	highTotal = 0;
	countAtHighRoll = 0;
	totalRolls = 0;
}

function gameLoop(){
	getBet();
	while(bet > 0){
		var d1 = Math.floor(6 * Math.random())+1;
		var d2 = Math.floor(6 * Math.random())+1;
		totalRolls++;
		
		if(d1+d2 == 7) {
			bet += 4;
			if(bet > highTotal) {
				highTotal = bet;
				countAtHighRoll = totalRolls;
			}
		}
		else {
			bet--;
		}
	}
	displayResults();
	resetVars();
}