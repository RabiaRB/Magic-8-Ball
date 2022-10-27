const options = [
    "Will I get a promotion at work?",
    "Should I pursue a new career path?",
    "Will I meet my soulmate soon?",
    "Is it a good time to invest in the stock market?",
    "Will I pass my upcoming exam?",
    "Should I go on a vacation this year?",
    "Will I be successful in my new business venture?",
    "Is there a major change coming in my life?",
    "Should I buy a new car?",
    "Will I receive a financial windfall in the near future?",
    "Is it a good idea to move to a new city?",
    "Will my health improve?",
    "Should I confront a friend about an issue?",
    "Will I win the lottery?",
    "Is it a good time to sell my house?",
    "Will I be able to pay off my debts?",
    "Should I take a risk in my personal life?",
    "Will I achieve my goals this year?",
    "Is someone trustworthy in my life?",
    "Should I start a new creative project?",
]


const input = document.getElementById('userQuestion');
const list = document.getElementById('autocomplete-list');

input.addEventListener('input', handleInput);
input.addEventListener('focus', handleInput);
list.addEventListener('click', handleItemClick);

function handleInput() {
  const searchText = input.value.toLowerCase();
  const matchedOptions = options.filter(option =>
    option.toLowerCase().startsWith(searchText)
  );
  renderOptions(matchedOptions);
}

function handleItemClick(event) {
  const selectedOption = event.target.innerText;
  input.value = selectedOption;
  list.innerHTML = '';
}

function renderOptions(matchedOptions) {
  if (matchedOptions.length === 0) {
    list.innerHTML = '';
    return;
  }

  const html = matchedOptions
    .map(option => `<li>${option}</li>`)
    .join('');

  list.innerHTML = html;
}
document.getElementById('askQuestion').onclick = startPrediction;

function startPrediction(){
    let userName = document.getElementById('userName').value;
    let userQuestion = document.getElementById('userQuestion').value;
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";

     if (!userName) {
        alert("Please enter your name.");
    } else if (!userQuestion) {
        alert("Please enter your question.");
    } else {
    switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "My sources say no";
        break;
    case 6:
        eightBall = "Outlook not so good";
        break;
    case 7:
        eightBall = "Signs point to yes";
        break;
    }
    document.getElementById('resultDisplay').style.display ='block';
    document.getElementById('resultDisplay').innerHTML = `Hello, ${userName}!<br>${eightBall}.`;
    document.getElementById('askQuestion').innerHTML = 'ASK ANOTHER QUESTION?';
    document.getElementById('askQuestion').onclick = clearFields;

}
   
}

function clearFields(){
    document.getElementById("userInput").reset();
    document.getElementById('resultDisplay').style.display = 'none';
    document.getElementById('askQuestion').innerHTML = 'ASK';
    document.getElementById('askQuestion').onclick = startPrediction;
}