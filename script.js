const verseny = new Date("2026-05-17T08:00:00").getTime();

function update(id, value) {
  const el = document.getElementById(id);
  if (el.innerText != value) {
    el.innerText = value;
    el.classList.add("change");

    setTimeout(() => {
      el.classList.remove("change");
    }, 200);
  }
}

setInterval(() => {
  const most = new Date().getTime();
  const diff = verseny - most;

  if (diff <= 0) return;

  const nap = Math.floor(diff / (1000 * 60 * 60 * 24));
  const ora = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const perc = Math.floor((diff / (1000 * 60)) % 60);
  const mp = Math.floor((diff / 1000) % 60);

  update("nap", nap);
  update("ora", ora);
  update("perc", perc);
  update("mp", mp);

}, 1000);
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");

  if (window.scrollY > 50) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
});
function addDonation() {
  const input = document.getElementById("donationInput");
  const list = document.getElementById("donationList");

  if (input.value.trim() === "") return;

  const item = document.createElement("div");
  item.className = "donation-item";
  item.innerText = "💛 " + input.value;

  list.appendChild(item);

  input.value = "";
}
function openStory(week) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  if (week === "week1") {
    text.innerHTML = `
      <h2>7 weeks out</h2>

      <p>
        A typical triathlon training plan usually follows a structure of three weeks of hard work followed by one easier, recovery week.
        So far, I haven’t been able to follow this pattern even once.
      </p>

      <p>
        My nervous system simply can’t handle three full weeks — it gets overloaded much sooner.
      </p>

      <p style="font-weight: bold; color: #0b3c5d;">
        Thank you Dad. I love you.
      </p>
    `;
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}