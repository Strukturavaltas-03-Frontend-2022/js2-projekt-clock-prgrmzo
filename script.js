const clock = document.querySelector(".clock-div");

const tick = () => {
  const now = new Date();

  const hours = dateFns.format(now, "HH");
  const minutes = dateFns.format(now, "mm");
  const seconds = dateFns.format(now, "ss");

  const html = `${hours} : ${minutes} : ${seconds}`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
