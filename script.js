document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const loginPopup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");

    loginBtn.addEventListener("click", () => {
        loginPopup.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });
});
