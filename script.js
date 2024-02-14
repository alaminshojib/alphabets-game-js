function hidenById(playId) {
  const play = document.getElementById(playId);

  play.classList.add("hidden");
}

function showById(playId) {
  const playGround = document.getElementById(playId);

  playGround.classList.remove("hidden");
}



function getrandomalphabet() {
  const randomAlphabet = "abcdefghijklmnopqrstuvwxyz",
    alphabets = randomAlphabet.split(""),
    randomIndex = Math.floor(Math.random() * alphabets.length),
    alphabet = document.getElementById("random-alphabet");

  alphabet.innerHTML = alphabets[randomIndex];

  const colorGround = document.getElementById(alphabet.innerHTML);
  colorGround.classList.add("bg-orange-400");
}
