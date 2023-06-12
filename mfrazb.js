// when user mouses over projects, update right side background image to corresponding project

// invoke callback when user mouses over project
function changeBackground(event) {
    const rightSideImage = document.querySelector(".main-image");
    if (event.target.id === "fraziers") {
        // update image to Frazier's landing page 
        rightSideImage.style.backgroundImage = "url(images/fraziers-finer-flavors-screenshot-half-width.png)";
        
        // show arrow next to Frazier's description pointing to image
        const arrow = document.createElement("div");
        arrow.textContent = ">";
        arrow.classList.add("arrow");
        event.target.appendChild(arrow);  
    }
    if (event.target.id === "rock-paper-scissors") {
        rightSideImage.style.backgroundImage = "url(images/rock-paper-scissors-screenshot.png)";
    }
    if (event.target.id === "calculator") {
        rightSideImage.style.backgroundImage = "url(images/calculator-screenshot.png)";
    }
}

const projectLinks = document.querySelectorAll(".project"); 

projectLinks.forEach(project => {
    addEventListener("mouseover", changeBackground);
});