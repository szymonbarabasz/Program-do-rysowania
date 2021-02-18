document.addEventListener("DOMContentLoaded", () => {
  let active = false;

  function draw(e) {
    if (active == false) return;
    const drawned = document.createElement("div");

    const x = e.clientX;
    const y = e.clientY;

    drawned.style.top = `${y}px`;
    drawned.style.left = `${x}px`;

    document.body.appendChild(drawned);
  }

  function drawActive(){
      active = !active;
  }

  document.body.addEventListener("mousedown", drawActive);
  document.body.addEventListener("mouseup", drawActive)
  document.body.addEventListener("mousemove", draw);
});
