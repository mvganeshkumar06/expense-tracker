const icon = document.querySelector(".icon");

icon.addEventListener("click", (event) => {
  console.log("arrow clicked");
  console.log(event.target);
});
