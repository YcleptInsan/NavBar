
function showCoords(event) {
	let x = event.clientX;
	let y = event.clientY;


	let coords = "X :" + x + ", Y :" + y;
	// console.log(coords);
	document.getElementById('coords').innerHTML = coords;
}

// function focus(event) {
// 	var key = event.keyCode;
// 	console.log(key);
// 	if(key == 73) {
// 		document.getElementById('nav-floating').style.visibility = 'hidden';
// 	}
//
// };
function showHide() {
	var x = document.getElementById('nav-floating');
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
