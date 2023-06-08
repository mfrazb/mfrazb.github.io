// when user mouses over projects, update right side background image to corresponding project


// const mainImage = document.querySelector(".main-image");
// mainImage.style.backgroundImage = "url(images/rock-paper-scissors-screenshot.png)";

// invoke callback when user mouses over project
function changeBackground(event) {
    const rightSideImage = document.querySelector(".main-image");
    if (event.target.id === "fraziers") {
        rightSideImage.style.backgroundImage = "url(images/fraziers-finer-flavors-screenshot-half-width.png)";
    }
    if (event.target.id === "rock-paper-scissors") {
        console.log(event.target.id);
        rightSideImage.style.backgroundImage = "url(images/rock-paper-scissors-screenshot.png)";
    }
}

const projectLinks = document.querySelectorAll(".project"); 

projectLinks.forEach(project => {
    addEventListener("mouseover", changeBackground);
});