const form = document.getElementById("contactForm");

const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        responseMessage.innerHTML = "Please fill all fields.";

        responseMessage.style.color = "red";

        return;
    }

    responseMessage.innerHTML = "Sending...";

    responseMessage.style.color = "black";

    setTimeout(function(){

        responseMessage.innerHTML = "Form submitted successfully!";

        responseMessage.style.color = "green";

        form.reset();

    }, 1000);

});