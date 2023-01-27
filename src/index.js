const $switcherBallBot = document.querySelector(".switcher-ball-bot");

const toggleSwitcher = () => {};
$switcherBallBot.addEventListener("click", () => {
  $switcherBallBot.classList.toggle("active");
  console.log("clicou em mim ");
});
