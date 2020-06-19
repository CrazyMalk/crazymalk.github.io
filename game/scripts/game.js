function exitGame(){
	window.location.replace("../index.html")
}
let canvas
let game
console.log(document.body.style.backgroundImage)
function startGame(){
	canvas = document.getElementById('gameCanvas')
	game = canvas.getContext('2d')
	game.fillStyle = "#4b4b4b";
	game.fillRect(0, 0, canvas.width, canvas.height);
}
