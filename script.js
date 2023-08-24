document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const sections = document.querySelectorAll("section");

    startButton.addEventListener("click", function () {
        sections.forEach((section) => {
            section.style.display = "block";
        });
        startButton.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animação de fadeIn para seções
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("fadeInUp");
    });
});
