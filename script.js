import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGXFib-1G7M7KkmJQCnhz9RR5rzDlfXbY",
  authDomain: "feeling-alive.firebaseapp.com",
  projectId: "feeling-alive",
  storageBucket: "feeling-alive.firebasestorage.app",
  messagingSenderId: "533691571866",
  appId: "1:533691571866:web:9c37ba90866d38b35a0923",
  measurementId: "G-RZPYM8QHB8"
};


function submitMessage() {
  const input = document.getElementById("supportInput");
  const text = input.value.trim();

  if (text === "") return;

  db.collection("messages").add({
    text: text,
    created: Date.now()
  });

  input.value = "";
}
db.collection("messages")
  .orderBy("created", "desc")
  .onSnapshot(snapshot => {
    const wall = document.getElementById("supportWall");
    wall.innerHTML = "";

    let messages = [];

    snapshot.forEach(doc => {
      messages.push(doc.data().text);
    });

    messages.sort(() => 0.5 - Math.random());

    messages.slice(0, 10).forEach(msg => {
      const div = document.createElement("div");
      div.innerText = msg;
      wall.appendChild(div);
    });
  });


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
    A typical triathlon training plan usually follows a structure of three weeks of hard work followed by one week of easier, recovery-focused training.
    So far, I haven’t been able to follow this pattern even once.
    </p>

    <p>
    My nervous system simply can’t handle three full weeks — it gets overloaded much sooner.
    My pain is influenced by things like stress, my thoughts, and even the smallest, uncontrollable factors.
    </p>

    <p>
    This week started well, but I didn’t listen to my body.
    On Monday I did a run and a bike session, Tuesday was swimming and gym, and Wednesday I ran again.
    </p>

    <p>
    By then, I felt that I needed to slow down, so I rested on Thursday and went for a light hike on Friday.
    Around this time, I started to get a cold — but my stubbornness took over.
    </p>

    <p>
    On Saturday, with a sore throat, I still went out for a 60 km bike ride.
    Everything felt great, and when I got home, I even went horseback riding.
    </p>

    <p>
    Needless to say, it was a mistake.
    I pushed too far, ignored the fact that I was sick, forgot that I can’t compare myself to others,
    and that a training plan is just a guideline — not something written in stone.
    </p>

    <p>
    Every single day I am learning how to pay more attention, how to be smarter and more aware — but it’s not easy.
    This small mistake cost me several days of suffering, a lot of medication, and forced rest.
    </p>

    <p>
    But I learned something again. And I will move forward wiser.
    </p>

    <p>
    Every week, I will dedicate this journey to someone — someone I am grateful for, someone without whom I wouldn’t be here.
    This week is for my Dad.
    </p>

    <p>
    Thank you to my Dad, who is the brake in my unstoppable fight.
    </p>

    <p>
    Sometimes I get angry at him. I think things I shouldn’t.
    But he is my rock, the foundation of my castle, the pillar of my life.
    </p>

    <p>
    He sets boundaries when I can’t. He is strong when I demand it.
    And gentle when I need it.
    </p>

    <p>
    Because of him, I have the chance to even start.
    Because of him, I am who I am today.
    His love and support are the foundation of my existence.
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
function selectAmount(amount) {
  const input = document.getElementById("donationInput");
  input.value = amount + " €";
}
function selectAmount(amount) {
  const input = document.getElementById("donationInput");

  // összeg beírása
  input.value = amount + " €";

  // highlight reset
  document.querySelectorAll(".donation-card").forEach(card => {
    card.classList.remove("selected");
  });

  // aktuális kártya kijelölése
  event.currentTarget.classList.add("selected");
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("READY");

  const button = document.querySelector("button");
  button.addEventListener("click", submitMessage);
});