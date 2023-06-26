const btn = document.querySelector("button");

function randomMessage() {
  fetch("https://api.adviceslip.com/advice?t=" + Math.random())
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector("p").innerText = data.slip.advice;
      document.querySelector("span").innerText = `#${data.slip.id}`;
    })
    .catch((error) => console.log(error));
}

btn.addEventListener("click", randomMessage);
document.addEventListener("DOMContentLoaded", randomMessage);
