let startTime = 0;
let elapsedTime = 0;
let intervalId;

const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  startTime = Date.now() - elapsedTime; 
  intervalId = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime; 
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  stopwatch.textContent = "00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  stopwatch.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
