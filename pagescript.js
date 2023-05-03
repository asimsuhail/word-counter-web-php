function count(str)
{
	var req = new XMLHttpRequest();
	req.open("GET" , "http://localhost/wordcounter/count.php?x="+str, true);
	req.send();
	
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status==200)
		{
			document.getElementById("r1").innerHTML= req.responseText;
		}
	}
	
}