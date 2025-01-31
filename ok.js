document.addEventListener("DOMContentLoaded", function() {
    const quote = document.querySelector(".quote");
    quote.style.opacity = "0";
    quote.style.transition = "opacity 2s ease-in-out";
    
    setTimeout(() => {
        quote.style.opacity = "1";
    }, 1000);
});
