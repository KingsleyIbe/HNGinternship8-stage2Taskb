const displayName = document.getElementById("container");
const btnDisplay = document.getElementById("btn");
const secretName =document.getElementById("secret-name");
btnDisplay.addEventListener ("click", myName);

function myName() {
    
        secretName.innerHTML = "Chibueze"
        setTimeout(()=>{}, 2000);
    
}

