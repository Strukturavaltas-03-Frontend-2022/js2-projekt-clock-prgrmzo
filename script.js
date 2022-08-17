const clock = document.querySelector(".clock-div");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = dateFns.format(now, "ss");

  const html = `${hours} : ${minutes} : ${seconds}`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
