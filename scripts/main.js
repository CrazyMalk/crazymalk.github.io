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
for (i = 0; i < collapsable.length; i++){
	let numberOfClicks = 0;
	clickSecret[i].addEventListener("click", function () {
		console.log("click");
		numberOfClicks++;
		console.log(numberOfClicks);
		if (numberOfClicks >= 10){
			numberOfClicks = 0;
			const childCount = body.childElementCount;
			for (i = body.childElementCount; i - clickSecret.length > 0; i--){
				const child = body.children[i-1];
				if (child.className != "secretContent"){
					body.removeChild(child);
				} else{
					console.log("is secret thing");
				}
			}
			console.log(`height is ${window.innerHeight} and width is ${window.innerWidth}`);
			console.log(body.childElementCount);
			body.style.width = window.innerWidth+"px";
			body.style.height = window.innerHeight+"px";
			body.style.backgroundColor = "#000000";
			const secrets = body.getElementsByClassName("secretContent");
			for (i = 0; i < secrets.length; i++){
				secrets[i].classList.toggle("secretActive", true);
				secrets[i].classList.toggle("secretContent", false);
			}
			//body.firstChild.classList.toggle("secretActive");
			//body.children[0].style.maxHeight = window.innerHeight;
			//body.children[0].style.width = window.innerWidth;
			

		}
	})
}