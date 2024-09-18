function showCard(card) {
  if (window.innerWidth > 500) {
      var modal = document.getElementById("modal");
      var modalContent = document.getElementById("modal-content");
      var cardClone = card.cloneNode(true);
      var imageBox = cardClone.querySelector(".image-box");
      var img = imageBox.querySelector("img");

      cardClone.style.width = "30vw";  
      cardClone.style.height = "62vh";

      img.style.transform = "scale(1.3)";  
      imageBox.style.height = "55vh";

    
      modalContent.style.fontSize = "clamp(1rem, 2vw, 2.5rem)";  // Минимум 1rem, адаптивный 2vw, максимум 2.5re

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

