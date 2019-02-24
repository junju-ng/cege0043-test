function startDataUpload(){
	var name = document.getElementById("name").value; // get name
	var surname = document.getElementById("surname").value; // get surname
	var module = document.getElementById("module").value; //get module
	// create postString with name surname and module
	var postString = "name=" + name + "&surname=" + surname + "&module=" + module;
	alert(postString);
}

