

window.addEventListener("load",async function(){
    alert("a");
    data = await MakeRequest("GET", "http://127.0.0.1:5000/getcountries/")
var x = document.getElementById("mySelect");
var option = document.createElement("option");
option.text = data["country"][0];
x.add(option);
},false);

async function MakeRequest(method, url){

let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
  console.log(json["country"][0])
    return json
} else {
  alert("HTTP-Error: " + response.status);
}
}
function sendJSON(){ 
               
           // let result = document.querySelector('.result'); 
           // let name = document.querySelector('#name'); 
           // let email = document.querySelector('#email'); 
               
            // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "http://127.0.0.1:5000/"; 
        
            // open a connection 
            xhr.open("POST", url, true); 
            //xhr.open("GET", url);
            // Set the request header i.e. which type of content you are sending 
           // xhr.setRequestHeader("Content-Type", "application/json"); 
  xhr.setRequestHeader("Content-Type", "text/plain"); 
            // Create a state change callback 
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 
  
                    // Print received data from server 
                    result.innerHTML = this.responseText; 
  
                } 
            }; 
  
            // Converting JSON data to string 
            var data = JSON.stringify({ "name": "Name", "email": "email.value" }); 
  
            // Sending data with the request 
            xhr.send(data); 
           //xhr.send(); 
        } 