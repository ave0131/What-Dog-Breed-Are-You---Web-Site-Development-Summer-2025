const questions = [
    {
        question: "What does your ideal day include?",
        answers: [
            {text: "Exercising and being active", breed: "Border Collie"},
            {text: "Watching TV and relaxing", breed: "Bulldog"},
            {text: "Hanging out with friends", breed: "Golden Retriever"},
            {text: "Reading a book or doing a puzzle", breed: "Italian Greyhound"}
        ]
    },
    {
        question: "Pick your dream vacation",
        answers: [
            {text: "A cabin with lots of hiking trails", breed: "Border Collie"},
            {text: "A luxury all-inclusive resort", breed: "Bulldog"},
            {text: "A family beach trip", breed: "Golden Retriever"},
            {text: "Traveling to cities in Europe", breed: "Italian Greyhound"}
        ]
    },
    {
        question: "What's your energy level like?",
        answers: [
            {text: "High energy, I need to keep busy", breed: "Border Collie"},
            {text: "Low energy, I like comfort and relaxation", breed: "Bulldog"},
            {text: "Moderate energy, I enjoy activity and downtime", breed: "Golden Retriever"},
            {text: "All over the place, I have quick bursts of energy and then need to rest", breed: "Italian Greyhound"}
        ]

    },
    {
        question: "How would you describe yourself?",
        answers: [
            {text: "Smart, energetic, and focused", breed: "Border Collie"},
            {text: "Loyal, chill, and courageous", breed: "Bulldog"},
            {text: "Friendly, cheerful, and devoted", breed: "Golden Retriever"},
            {text: "Creative, quirky, and sensitive", breed: "Italian Greyhound"}
        ]
    },
    {
        question: "What's your favorite board game?",
        answers: [
            {text: "Chess or Scrabble", breed: "Border Collie"},
            {text: "Battleship or Monopoly", breed: "Bulldog"},
            {text: "Uno or Candyland", breed: "Golden Retriever"},
            {text: "Pictionary or Clue", breed: "Italian Greyhound"}
        ]
    },
    {
        question: "What's your ideal snack?",
        answers: [
            {text: "Gummy worms", breed: "Border Collie"},
            {text: "Grilled cheese sandwich", breed: "Bulldog"},
            {text: "Pizza", breed: "Golden Retriever"},
            {text: "Popcorn", breed: "Italian Greyhound"}
        ]
    },
    {
        question: "What pet would you pick?",
        answers: [
            {text: "A parrot", breed: "Border Collie"},
            {text: "A turtle", breed: "Bulldog"},
            {text: "A bunny", breed: "Golden Retriever"},
            {text: "A cat", breed: "Italian Greyhound"}
        ]
    }
];        

let currentQuestionIndex = 0;

const breedImages ={
    "Border Collie": "images/Border-Collie.jpg.avif",
    "Bulldog": "images/Bulldog.jpg.avif",
    "Golden Retriever": "images/Golden-Retriever.jpg.avif",
    "Italian Greyhound": "images/Italian-Greyhound.jpg.avif"
}
const breedUrls = {
    "Border Collie": "https://www.akc.org/dog-breeds/border-collie/",
    "Bulldog": "https://www.akc.org/dog-breeds/bulldog/",
    "Golden Retriever": "https://www.akc.org/dog-breeds/golden-retriever/",
    "Italian Greyhound": "https://www.akc.org/dog-breeds/italian-greyhound/"
}
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    questionText.textContent = currentQuestion.question;

    const answerButtons = document.querySelectorAll(".answer-btn");
    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer.text;
    });
}

const startButton = document.getElementById("start-quiz");
startButton.addEventListener("click", function() {
    startButton.classList.add("hide");

    const questionText = document.getElementById("question-text");
    questionText.classList.remove("hide");

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.classList.remove("hide");

    const startPageDogs = document.getElementById("start-page");
    startPageDogs.classList.add("hide");

    showQuestion();

});

let breedScores = {
    "Border Collie": 0,
    "Bulldog": 0,
    "Golden Retriever": 0,
    "Italian Greyhound": 0
};

const answerButtons = document.querySelectorAll(".answer-btn");
answerButtons.forEach(button => {
    button.addEventListener("click", function() {
        const selectedAnswer = this.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const answer = currentQuestion.answers.find(a => a.text === selectedAnswer);

        if (answer) {
            breedScores[answer.breed]++;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult(answer.breed);
            }
        }
    });
    });

function showResult() {
   let winningBreed = "";
   let highestScore = 0;
   for (let breed in breedScores) {
       if (breedScores[breed] > highestScore) {
           highestScore = breedScores[breed];
           winningBreed = breed;
       }
   }

   document.getElementById("question-text").classList.add("hide");
   document.getElementById("answer-buttons").classList.add("hide");

   const resultContainer = document.getElementById("result-container");
   resultContainer.classList.remove("hide");

   document.getElementById("result-text").textContent = winningBreed;

    const resultImage = document.getElementById("result-image");
    const resultLink = document.getElementById("result-link");
    
    resultImage.src = breedImages[winningBreed];
    resultImage.alt = winningBreed;
    resultImage.classList.remove("hide");
    
    resultLink.href = breedUrls[winningBreed];
    resultLink.target = "_blank";
}

document.getElementById("restart-btn").addEventListener("click", function(event) {
    event.stopPropagation();

    currentQuestionIndex = 0;
    breedScores = {
        "Border Collie": 0,
        "Bulldog": 0,
        "Golden Retriever": 0,
        "Italian Greyhound": 0
    };

    document.getElementById("result-container").classList.add("hide");
    document.getElementById("start-quiz").classList.remove("hide");
    document.getElementById("question-text").classList.add("hide");
    document.getElementById("answer-buttons").classList.add("hide");
    document.getElementById("result-text").textContent = "";
    document.getElementById("start-page").classList.remove("hide");
    
    const resultImage = document.getElementById("result-image");
    resultImage.src = "";
    resultImage.classList.add("hide");

    const resultLink = document.getElementById("result-link");
    resultLink.href = "#";
    resultLink.target = "_blank";
    document.getElementById("result-image").classList.add("hide");
});

    const resultImage = document.getElementById("result-image");
    resultImage.addEventListener("click", function() {
        const resultLink = document.getElementById("result-link");
        window.open(resultLink.href, "_blank");
    });







