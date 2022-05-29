const btn1 = document.querySelector(".read--more");

const scrollMachine = () => {
  const scrollValue = 720;

  window.scrollTo({
    top: scrollValue,
    behavior: "smooth",
  });
};

btn1.addEventListener("click", scrollMachine);
