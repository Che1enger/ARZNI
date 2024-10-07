function showCard(card) {
    if (window.innerWidth > 500) {
        const modal = document.getElementById("modal");
        const modalContent = document.getElementById("modal-content");
        const cardClone = card.cloneNode(true);
        const imageBox = cardClone.querySelector(".image-box");
        const img = imageBox.querySelector("img");
        const content = cardClone.querySelector(".content");

        cardClone.style.transition = "none";
        cardClone.style.boxShadow = "none";
        cardClone.style.transform = "none";

        const table = cardClone.querySelector("table");
        table.style.display = "table";

        cardClone.style.flexDirection = "row";
        content.style.width = "50%";
        const tableContent = cardClone.querySelector(".table");
        tableContent.style.width = "50%";
        tableContent.style.height = "100%";

        cardClone.style.width = "60vw";  
        cardClone.style.height = "60vh";
        img.style.transform = "scale(1.3)";
        imageBox.style.height = "55vh";

        modalContent.style.fontSize = "clamp(1rem, 2vw, 2.5rem)";  
        table.style.fontSize = "clamp(1rem, 2vw, 2.5rem)";
        modalContent.innerHTML = "";
        modalContent.appendChild(cardClone);
        modal.style.display = "flex";

        cardClone.style.boxShadow = '0px 0px 0 0 black';
        cardClone.classList.add('card-clone');
    } else {
        const table = card.querySelector("table");

        card.style.transition = "none"; 
        card.style.maxHeight = "380px"; 

        setTimeout(() => {
            card.style.transition = "max-height 1.5s ease";
            card.style.overflow = "hidden";

            if (table.style.display === "table") {
                table.style.display = "none";
                card.style.maxHeight = "380px";
            } else {
                table.style.display = "table";
                card.style.maxHeight = "800px";
            }
        }, 1);
    }
}

document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

