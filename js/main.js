const btn1 = document.querySelector(".read--more");
const btnPopup = document.querySelector(".popupActive");
const section = document.querySelector(".how-it-works");

const scrollMachine = () => {
  const scrollValue = section.offsetTop;
  console.log(section);
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
    document.body.style.overflow = "visible";
    popup.classList.remove("active");
    divs.forEach((div) => {
      div.classList.remove("active");
    });
  };

  popup.classList.add("active");
  divs.forEach((div) => {
    div.classList.add("active");
  });
  document.body.style.overflow = "hidden";
  btnClosePopup.addEventListener("click", closePopup);
};

btn1.addEventListener("click", scrollMachine);
btnPopup.addEventListener("click", popUpVisibility);
