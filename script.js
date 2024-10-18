var load=document.querySelector(".loader")
setTimeout(function(){
    load.style.top="-100%"
},5000)
function changeImageAndDetails() {
    const professorSelect = document.getElementById("professor");
    const selectedOption = professorSelect.options[professorSelect.selectedIndex];

    // Change image
    const imgElement = document.getElementById("professorImage");
    imgElement.src = selectedOption.getAttribute("data-img");

    // Change details
    document.getElementById("qualification").innerHTML = "<strong>Qualification:</strong> " + selectedOption.getAttribute("data-qualification");
    document.getElementById("email").innerHTML = "<strong>Email:</strong> " + selectedOption.getAttribute("data-email");
    document.getElementById("phone").innerHTML = "<strong>Phone:</strong> " + selectedOption.getAttribute("data-phone");
}

// Initialize with the first professor's details
changeImageAndDetails();

// Event listener for form submission
document.querySelector(".booking-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to the server

    // Show popup window
    showPopup("Your appointment has been successfully booked!");
});

// Function to show the popup window
function showPopup(message) {
    // Create a div element for the popup
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Add the message to the popup
    popup.innerHTML = `<p>${message}</p><button id="closePopup">Close</button>`; // Use backticks for template literals
    
    // Add the popup to the body
    document.body.appendChild(popup);
    
    // Close the popup when the button is clicked
    document.getElementById("closePopup").addEventListener("click", function() {
        popup.remove();
    });
}