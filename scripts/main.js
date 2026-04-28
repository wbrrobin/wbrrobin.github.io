const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
   const mySrc = myImage.getAttribute("src");
   if (mySrc === "images/robin.jpg") {
       myImage.setAttribute("src", "images/robin-stare.jpg")
   } else {
       myImage.setAttribute("src", "images/robin.jpg")
   }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Bitte geben Sie Ihren Namen ein.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Ich hab Hunger, ${myName}!!!`
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Ich hab Hunger, ${storedName}!!!`
}

myButton.addEventListener("click", () => setUserName())