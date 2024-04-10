const fireContainer = document.createElement("div");
fireContainer.className = "fire-container";
document.body.appendChild(fireContainer);

document.addEventListener("mousemove", function(event) {
    createFire(event.clientX, event.clientY);
});

function createFire(x, y) {
    const fire = document.createElement("div");
    fire.className = "fire";
    fire.style.left = x + "px";
    fire.style.top = y + "px";
    fireContainer.appendChild(fire);
    setTimeout(() => {
        fire.remove();
    }, 1000);
}