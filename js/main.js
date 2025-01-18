window.addEventListener("scroll", function () {
    const projectSection = document.getElementById("project");
    const sectionPosition = projectSection.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (sectionPosition.top < screenHeight / 2 && sectionPosition.bottom > 0) {
        document.body.classList.add("inverted");
    } else {
        document.body.classList.remove("inverted");
    }
});