const message= `👍 Merci de nous avoir transmis votre demande 👍`;
document.querySelector("#contactform");
document.addEventListener("submit", function(event) {
event.preventDefault();
alert(message);
})