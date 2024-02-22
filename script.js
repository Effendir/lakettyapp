const votersUl = document.querySelector(".voters-list");
const votersNamesInput = document.querySelector("#voter-name");
const percentageInput = document.querySelector("#voter-percentage");
const addVoterButton = document.querySelector(".add-voter-button");
let percentageResult = document.querySelector(".result");
let progressBar = document.querySelector(".progress-bar");

let total = 0;
let votersNumber = 0;

addVoterButton.addEventListener("click", (e) => {
  let inputValue = votersNamesInput.value + " - " + percentageInput.value + " % ";
  votersNamesInput.value = "";
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = inputValue + " ";
  let newButton = document.createElement("button");
  newButton.innerText = " - ";
  li.appendChild(span);
  li.appendChild(newButton);
  votersUl.appendChild(li);
  votersNumber++;
  total += +percentageInput.value;
  updatePercentage();
  updateProgressBar();
  percentageInput.value = "";
  votersNamesInput.focus();
  newButton.addEventListener("click", (e) => {
    votersUl.removeChild(li);
    const percentageToRemove = parseFloat(span.innerText.split('-')[1]);
    total -= percentageToRemove;
    votersNumber--;
    updatePercentage();
    updateProgressBar();
  });
});

function updatePercentage() {
  if (votersNumber === 0) {
    percentageResult.innerText = "0%";
  } else {
    percentageResult.innerText = `${total / votersNumber} %`;
  }
}

function updateProgressBar() {
  if (votersNumber === 0) {
    progressBar.style.display = "none";
  } else {
    progressBar.style.display = "block";
    progressBar.style.width = `${total / votersNumber}%`;
  }
}

const contestantsUl = document.querySelector(".contestants-list");
const contestantsNamesInput = document.querySelector("#contestant-name");
const addContestantButton = document.querySelector(".add-contestant-button");
const winnerDisplay = document.querySelector(".winner");
const randomizeButton = document.querySelector(".random");
let contestantsPool = [];

addContestantButton.addEventListener("click", (e) => {
  let inputValue = contestantsNamesInput.value;
  contestantsPool.push(inputValue);
  contestantsNamesInput.value = "";
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = inputValue + " ";
  let newButton = document.createElement("button");
  newButton.innerText = " - ";
  li.setAttribute("data-name", inputValue);
  li.appendChild(span);
  li.appendChild(newButton);
  contestantsUl.appendChild(li);
  contestantsNamesInput.focus();
  newButton.addEventListener("click", (e) => {
    contestantsUl.removeChild(li);
    const contestantName = li.getAttribute("data-name");
    contestantsPool.splice(contestantsPool.indexOf(contestantName), 1);
  });
});

randomizeButton.addEventListener("click", (e) => {
  let winner = contestantsPool[Math.floor(Math.random() * contestantsPool.length)];
  winnerDisplay.innerText = winner;
})
