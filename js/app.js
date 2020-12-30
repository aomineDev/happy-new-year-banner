function starts() {
  const count = 200;
  const section = document.querySelector("section");
  let i = 0;

  while (i < count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const size = Math.random() * 4;

    const duration = Math.random() * 2;
    console.log(duration);
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = 2 + duration + "s";
    star.style.animationDelay = duration + "s";

    section.appendChild(star);
    i++;
  }
}

starts();
