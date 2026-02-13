const noButton = document.querySelector(".no__button")
const yesButton = document.querySelector(".yes__button")
const hiddenValentineOne = document.querySelector(".hidden__img_first")
const hiddenValentineTwo = document.querySelector(".hidden__img_second")
const text = document.querySelector(".main__text")


let counter = 0
let xPadding = 30
let yPadding = 60

noButton.addEventListener("mouseenter", (e) => {
  e.stopPropagation

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
  console.log(x, y);
})

yesButton.addEventListener("click", (e) => {
  e.stopPropagation()

  counter += 1

  switch(counter) {
    case 1:
      yesButton.style.fontSize = "50px"
      yesButton.textContent = "SERIOUSLY?!"
      break
    case 2:
      yesButton.style.fontSize = "80px"
      yesButton.textContent = "ARE YOU SURE?!"
      break
    case 3:
      hiddenValentineOne.style.display = "block"
      hiddenValentineTwo.style.display = "block"
      noButton.classList.add("hidden")
      yesButton.classList.add("hidden")
      text.classList.add("hidden")
      break
  }

  yesButton.style.position = "fixed";
  yesButton.style.left = "50%";
  yesButton.style.top = "50%";
  yesButton.style.transform = "translate(-50%, -50%)";

  yPadding *= 2
  xPadding *= 2

  yesButton.style.padding = `${yPadding}px ${xPadding}px`
})