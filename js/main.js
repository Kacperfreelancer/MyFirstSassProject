const btn1 = document.querySelector(".read--more");
const btnPopup = document.querySelector(".popupActive");

const scrollMachine = () => {
  const scrollValue = 720;

  window.scrollTo({
    top: scrollValue,
    behavior: "smooth",
  });
};

const popUpVisibility = () => {
  const popup = document.querySelector(".popup");
  const btnClosePopup = document.querySelector(".exit");
  let divs = [...document.querySelectorAll("body>div")];
  divs.pop();

  const closePopup = () => {
    popup.classList.remove("active");
    divs.forEach((div) => {
      div.classList.remove("active");
    });
  };

  popup.classList.add("active");
  divs.forEach((div) => {
    div.classList.add("active");
  });
  btnClosePopup.addEventListener("click", closePopup);
};

btn1.addEventListener("click", scrollMachine);
btnPopup.addEventListener("click", popUpVisibility);
