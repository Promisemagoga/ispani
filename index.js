let servicesEl = document.getElementById("services-el")

servicesEl.innerHTML = "No results"


function addProfile(){
     console.log("clicked")
 }



 var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };