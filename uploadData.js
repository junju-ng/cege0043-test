function startDataUpload(){
	var name = document.getElementById("name").value; // get name
	var surname = document.getElementById("surname").value; // get surname
	var module = document.getElementById("module").value; //get module
	// create postString with name surname and module
	var postString = "name=" + name + "&surname=" + surname + "&module=" + module;
	alert(postString);
	processData(postString); //call processData so it actually runs
}


var client; // global variable to hold AJAX request

// create AJAX request
function processData(postString){
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30296/reflectData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

// create code to wait for response from server and process response once it is received
function dataUploaded(){
	// function listens for server to say data is readyState
	if (client.readyState === 4){
		// change data upload result DIV to show response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}

