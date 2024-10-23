let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox2.png");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

if (!localStorage.getItem("name")) {
setUserName();
 } else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
} 

myButton.onclick = () => {
    setUserName();
  };