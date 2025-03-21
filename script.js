document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const logoLink = document.getElementById("logo-link");

    // Quando clicar no botão, some a tela inicial e mostra o conteúdo
    startBtn.addEventListener("click", function() {
        introScreen.style.display = "none";
        mainContent.style.display = "block";
    });

    // Voltar para a tela inicial ao clicar na logo
    logoLink.addEventListener("click", function(event) {
        event.preventDefault();
        mainContent.style.display = "none";
        introScreen.style.display = "flex";
    });
});
