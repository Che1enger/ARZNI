function showCard(card) {
    
    if (window.innerWidth > 500) { 
        var modal = document.getElementById("modal");
        var modalContent = document.getElementById("modal-content");
        var cardClone = card.cloneNode(true);
        cardClone.style.transform = "scale(1.3)";
        modalContent.innerHTML = "";
        modalContent.appendChild(cardClone);
        modal.style.display = "flex";
        cardClone.style.boxShadow = '0px 0px 0 0 black';
        
    }
}

document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

