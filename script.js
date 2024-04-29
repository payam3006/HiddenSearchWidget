let boxStatus = false;

const actOn = () => {
  if (boxStatus) {
    document.getElementById("searchBox").classList.add("hidden");
    boxStatus = false;
  } else {
    document.getElementById("searchBox").classList.remove("hidden");
    boxStatus = true;
  }
};
