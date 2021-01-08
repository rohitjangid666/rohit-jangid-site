$('.count').counterUp({
    delay:10,
    time:1000
})

//Get the button:
mybutton = document.getElementById("myBtn");

//when the user scrolls down 40px from the top of the document, show the buttom
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
} else {
        mybutton.style.display = "none";
    }
}

// when the user clicks on the button, scrolls top of the document
function topFunction(){
    document.body.scrollTop = 0; //For safari
    document.documentElement.scrollTop = 0; //For Chrome, firefox, IE and opera
}