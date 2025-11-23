// const sidebar = document.getElementById("sidebar")
// sidebar.addEventListener("click", () => {
//   alert("YESSSSS");
// });

const menuButtons = document.querySelectorAll(".menu-options button");

menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        menuButtons.forEach(b => b.classList.remove("active-menu"));
        btn.classList.add("active-menu");
    });
});
