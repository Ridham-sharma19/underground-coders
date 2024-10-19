var load=document.querySelector(".loader")
setTimeout(function(){
    load.style.top="-100%"
},5000)
function changeImageAndDetails() {
    const professorSelect = document.getElementById("professor");
    const selectedOption = professorSelect.options[professorSelect.selectedIndex];


    const imgElement = document.getElementById("professorImage");
    imgElement.src = selectedOption.getAttribute("data-img");

 
    document.getElementById("qualification").innerHTML = "<strong>Qualification:</strong> " + selectedOption.getAttribute("data-qualification");
    document.getElementById("email").innerHTML = "<strong>Email:</strong> " + selectedOption.getAttribute("data-email");
    document.getElementById("phone").innerHTML = "<strong>Phone:</strong> " + selectedOption.getAttribute("data-phone");
}


changeImageAndDetails();


document.querySelector(".booking-form").addEventListener("submit", function(event) {
    event.preventDefault();  


    showPopup("Your appointment has been successfully booked!");
});


function showPopup(message) {
    
    const popup = document.createElement("div");
    popup.classList.add("popup");

    
    popup.innerHTML = `<p>${message}</p><button id="closePopup">Close</button>`; 
    
   
    document.body.appendChild(popup);
    
    
    document.getElementById("closePopup").addEventListener("click", function() {
        popup.remove();
    });
}