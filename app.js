document.addEventListener("DOMContentLoaded", () => {

    function draw(e){
        const drawned = document.createElement("div");

        const x = e.clientX;
        const y = e.clientY;

        drawned.style.top = `${y}px`;
        drawned.style.left = `${x}px`;

        document.body.appendChild(drawned);
    }

    document.body.addEventListener("mousemove", draw)
})