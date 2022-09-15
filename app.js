const button = document.querySelector("button");
const form = document.querySelector("#memeGeneratorForm");
const inputs = document.querySelectorAll(".form-control");
const imgURL = document.querySelector("#link");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  generateMeme(imgURL.value, topText.value, bottomText.value);
  for (const input of inputs) {
    input.value = "";
  }
});


function generateMeme(imgLink, upperText, lowerText) {
  //Create new elements
  const container2 = document.createElement("div");
  const upperTextDiv = document.createElement("div");
  const lowerTextDiv = document.createElement("div");
  const newImg = document.createElement("img");

  //adding the image source and inner texts
  newImg.src = imgLink;
  upperTextDiv.append(upperText);
  lowerTextDiv.append(lowerText);

  //adding image and text divs to the container
  container2.append(newImg);
  container2.append(upperTextDiv);
  container2.append(lowerTextDiv);


  //adding the class to each div
  container2.classList.add("container");
  upperTextDiv.classList.add("textUpper");
  lowerTextDiv.classList.add("textLower");
  newImg.classList.add("img");

  //appending to the end of the body
  document.body.appendChild(container2);

  container2.addEventListener("click", function (e) {
    e.preventDefault();
    container2.remove();
  });

  container2.addEventListener("mouseover", function (e) {
    e.preventDefault();
    upperTextDiv.innerText = "";
    lowerTextDiv.innerText = "";
    newImg.src = "https://ps.w.org/dx-delete-attached-media/assets/icon-256x256.png?rev=1729317";
    newImg.classList.add("trash");
  });
  container2.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    upperTextDiv.append(upperText);
    lowerTextDiv.append(lowerText);
    newImg.src = imgLink;
    newImg.classList.remove("trash");
  });

}




