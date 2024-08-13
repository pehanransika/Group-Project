let sideMenuBtns = document.querySelectorAll(".sideMenuBtn");
const addPostBtn = document.querySelector(".addPost-btn")
const body = document.querySelector("body");
const popupCloseBtn = document.getElementById("popup-close-btn")
const popupClearBtn = document.getElementById("popup-clear-btn")

sideMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (body.classList.contains("sidebar-deactive")) {
            body.classList.remove("sidebar-deactive");
        } else {
            body.classList.add("sidebar-deactive");
        }
    });
});

addPostBtn.addEventListener("click", () => {
    if(body.classList.contains("overlay-active")){
        body.classList.remove("overlay-active")
    } else {
        body.classList.add("overlay-active")
    }
})

popupCloseBtn.addEventListener("click", () => {
    body.classList.remove("overlay-active")
})

popupClearBtn.addEventListener("click", () => {
    body.querySelector(".popup textarea").value = ""
    body.querySelector(".popup input[type='text']").value = ""
})