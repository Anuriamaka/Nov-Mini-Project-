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

const collapseBtn = document.getElementById("collapse-btn");
collapseBtn.onclick = () => {
    document.getElementById("sidebar").classList.toggle("collapsed");
};

