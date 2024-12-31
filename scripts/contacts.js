//CLOSE AND OPEN POP-UP
function openContacts(){
    document.getElementById("contact-pop-up").style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("contact-button").style.display = "none";

}
    
function closeContacts(){
    document.getElementById("contact-pop-up").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("contact-button").style.display = "flex";
    
}

