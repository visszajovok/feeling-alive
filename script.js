const verseny = new Date("2026-08-15").getTime();

setInterval(() => {
  const most = new Date().getTime();
  const diff = verseny - most;

  const nap = Math.floor(diff / (1000 * 60 * 60 * 24));
  const ora = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("ido").innerText =
    nap + " nap " + ora + " óra";
}, 1000);