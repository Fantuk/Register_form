const login = document.getElementById("login");
const signUp = document.getElementById("signUp");

const cursorDot = document.getElementById("cursorDot");
const cursorOutline = document.getElementById("cursorOutline");

// Custom cursor
window.addEventListener("mousemove", (ev) => {
    posX = ev.clientX;
    posY = ev.clientY;

    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    cursorOutline.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: "forwards"});
});
// Custom cursor END

login.addEventListener("click", () => {
    login.classList.add("active");
});

signUp.addEventListener("click", () => {
    login.classList.remove("active");
});