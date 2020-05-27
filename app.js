function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    moveVertical(-50);
  } else if (e.key === "ArrowDown") {
    moveVertical(50);
  } else if (e.key === "ArrowRight") {
    moveHorizontal(50);
    player.style.transform = "scale(1, 1)";
  } else if (e.key === "ArrowLeft") {
    moveHorizontal(-50);
    player.style.transform = "scale(-1, 1)";
  }
  if (isTouching(player, coin)) {
    let currentScore = parseInt(document.querySelector("#score").innerHTML);
    document.querySelector("#score").innerHTML = `${currentScore + 1}`;
    moveCoin();
  }
});
const moveVertical = (amount) => {
  let currentTop = extractPosition(player.style.top);
  player.style.top = `${currentTop + amount}px`;
};
const moveHorizontal = (amount) => {
  let currentLeft = extractPosition(player.style.left);
  player.style.left = `${currentLeft + amount}px`;
};
const extractPosition = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};
const moveCoin = () => {
  const top = `${Math.abs(
    Math.floor(Math.random() * window.innerHeight) - 100
  )}px`;
  const left = `${Math.abs(
    Math.floor(Math.random() * window.innerWidth) - 100
  )}px`;
  coin.style.top = top;
  coin.style.left = left;
};
moveCoin();
