const collapsable = document.getElementsByClassName("collapsible");
let body = document.body;
let bodyStyle = getComputedStyle(body);

for (i = 0; i < collapsable.length; i++){
	collapsable[i].addEventListener("click", function () {
		this.classList.toggle("activeCollapsible");
		const content = this.nextElementSibling;
		/*if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}*/
		
		console.log("content.style.maxHeight is "+content.style.maxHeight);
		if (!content.style.maxHeight){
			content.style.maxHeight += content.scrollHeight + "px";
		}
		else{
			content.style.maxHeight = null;
		}
	});
} 

const clickSecret = document.getElementsByClassName("clickSecret");
const secrets = body.getElementsByClassName("secretContent");
for (i = 0; i < collapsable.length; i++){
	let numberOfClicks = 0;
	clickSecret[i].addEventListener("click", function () {
		numberOfClicks++;
		if (numberOfClicks >= 10){
			console.log("death");
			numberOfClicks = 0;
			const childCount = body.childElementCount;
			for (i = body.childElementCount; i - secrets.length > 0; i--){
				const child = body.children[i-1];
				if (child.className != "secretContent"){
					body.removeChild(child);
				} else{
					console.log("is secret");
				}
			}
			console.log(body.childElementCount);
			body.style.width = window.innerWidth+"px";
			body.style.height = window.innerHeight+"px";
			body.style.backgroundColor = "#000000";
			console.log("number of secrets: "+secrets.length);
			for (i = 0; i < secrets.length; i++){
				secrets[i].classList.toggle("secretActive", true);
				console.log(secrets[i].classList);
			}
			//body.firstChild.classList.toggle("secretActive");
			//body.children[0].style.maxHeight = window.innerHeight;
			//body.children[0].style.width = window.innerWidth;
			

		}
	})
}
const popup = document.getElementById("gameModalBox");
function gameWarnPopup(){
	popup.style.display = "block";
	//console.log(popup.classList);
}
const closeButton = document.getElementsByClassName("close")[0];
function closeButtonClick() {
	popup.style.display = "none";
}

const rainbowTexts = document.getElementsByClassName("rainbow");
const rainbowColors = ["Pink","Blue","Green","Lime","Orange","DeepPink","BlueViolet","Magenta","PaleGreen","Yellow","Cyan","DarkBlue","ForestGreen","GreenYellow","Gold","LightCoral","Red","Tomato"];

for (i = 0; i < rainbowTexts.length; i++){
	const rainbow = rainbowTexts[i];
	let rainbowSpeed = getComputedStyle(rainbow).getPropertyValue("--rainbowSpeed");
	//if (rainbowSpeed === ""){rainbowSpeed = 0.2;}
	setInterval(rainbowLettering, rainbowSpeed * 1000);
	function rainbowLettering(){
		if (rainbow.offsetParent != null){
			let randomNumber = Math.floor(Math.random() * rainbowColors.length)
			let newColor = rainbowColors[randomNumber];
			while (newColor === rainbow.style.color){
				randomNumber = Math.floor(Math.random() * rainbowColors.length);
				newColor = rainbow[randomNumber];
			}
			rainbow.style.color = newColor;
		}
	}
}

function startGame() {window.location.href = "game/game.html"}