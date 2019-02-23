var xhr; //define global variable to process AJAX request

// AJAX request function
function callDivChange(){
	xhr = new XMLHttpRequest();
	var filename = document.getElementById("filename").value; //get content in filename text box
	xhr.open("GET", filename, true); // send to server
	xhr.onreadystatechange = processDivChange;
	xhr.send();
}

// AJAX response function
function processDivChange(){
	if (xhr.readyState < 4) //while waiting for response from server
		document.getElementById('div1').innerHTML = "Loading...";
	else if (xhr.readyState === 4) { // 4 = response from server completely loaded
		if (xhr.status > 199 && xhr.status < 300) // http status between 200 to 299 are all successful
			document.getElementById('div1').innerHTML = xhr.responseText;
	}
}