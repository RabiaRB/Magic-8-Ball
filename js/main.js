

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
}
    document.getElementById('resultDisplay').style.display ='block';
    document.getElementById('resultDisplay').innerHTML = `Hello, ${userName}!<br>${eightBall}.`;
    userName.innerHTML=" ";
    userQuestion.innerHTML=" ";
    document.getElementById('askQuestion').innerHTML = 'ASK ANOTHER QUESTION?'

}
