let sideMenuBtns = document.querySelectorAll(".sideMenuBtn");
const addPostBtn = document.querySelector(".addPost-btn")
const body = document.querySelector("body");
const popupCloseBtn = document.getElementById("popup-close-btn")
const popupClearBtn = document.getElementById("popup-clear-btn")
const popuppostBtn = document.getElementById("popup-post-btn")
const navRadios = document.querySelectorAll('input[name="nav"]');
const notificationMsg = document.querySelector(".notification-msg");
const postLikeBtns = document.querySelectorAll(".post .like");
let notificationMsgContent = "Your vote has been successfully added !";

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
    if (body.classList.contains("overlay-active")) {
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


sideMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (body.classList.contains("sidebar-deactive")) {
            body.classList.remove("sidebar-deactive");
        } else {
            body.classList.add("sidebar-deactive");
        }
    });
});

navRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue; // Redirect to the selected page
        }
    });
});

popuppostBtn.addEventListener("click", () => {
    // implement validation here
    let validity = false
    const addPostTitle = body.querySelector(".popup #add-post-title")
    const addPostCaption = body.querySelector(".popup #add-post-caption")
    if (addPostTitle.value && addPostCaption.value) {
        validity = true
    } else {
        if (!addPostTitle.value) {
            addPostTitle.parentElement.classList.add("error")
        }
        if (!addPostCaption.value) {
            addPostCaption.parentElement.classList.add("error")
        }
        addPostTitle.addEventListener("input", () => {
            addPostTitle.parentElement.classList.remove("error")
        })
        addPostCaption.addEventListener("input", () => {
            addPostCaption.parentElement.classList.remove("error")
        })
    }
    if (validity) {
        notificationMsgContent = "Your post has been successfully added !"
        notificationMsg.innerHTML = notificationMsgContent;
        body.classList.remove("overlay-active")
        body.classList.add("noti-active")
        setTimeout(() => {
            body.classList.remove("noti-active")
        }, 3000)
    }


})

postLikeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.closest(".post").classList.toggle("reacted")
    })
})