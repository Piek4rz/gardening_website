// script.js

// Poczekaj, aż dokument HTML zostanie całkowicie załadowany
document.addEventListener("DOMContentLoaded", function() {
    // Znajdź przycisk w sekcji głównej
    const button = document.querySelector(".jumbotron button");
  
    // Znajdź nagłówek sekcji głównej
    const jumbotron = document.querySelector(".jumbotron");
  
    // Ustaw obsługę zdarzenia na kliknięcie przycisku
    button.addEventListener("click", function() {
      // Zmień kolor tła nagłówka po kliknięciu przycisku
      jumbotron.style.backgroundColor = "lightblue";
    });
  });
  