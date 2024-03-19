
let categoryAPIs = {
    "General Knowledge": {
        easy: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
        medium: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
        hard: "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple"
    },
    "Sports": {
        easy: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
        medium: "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple",
        hard: "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"
    },
    "Computer Science": {
        easy: "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
        medium: "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple",
        hard: "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"

    },
    "History": {
        easy: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
        medium: "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple",
        hard: "https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple"
    },
    "Geography": {
        easy: "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple",
        medium: "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple",
        hard: "https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple"
    },
    "Politics":{
       easy:"https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple",
       medium:"https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple",
       hard:"https://opentdb.com/api.php?amount=10&category=24&difficulty=hard&type=multiple"
    }
};

let category, difficulty;
let data;
let QuestionTitle = document.querySelector(".QuestionTitle")
let problemStatment = document.querySelector(".statment")
let QuestionBox = document.querySelector('.QuestionBox')
let mainContainer = document.querySelector(".mainContainer")
let NextButton = document.querySelector(".next")
let currentIndex = 0;
let options = document.querySelectorAll(".options .choices")
let useroptions = []
let innerArray = []
let UserScoreelement = document.querySelector('#UserScore')
let userScore = 0
let QuizResultContainer = document.querySelector(".QuizResultContainer")
let MenuBtn = document.querySelector("#MenuBtn")
let UserSelectedOption
function buttonClicked(category, difficulty) {
    // console.log('Category: ', category, "\nDifficulty: ", difficulty)
    this.category = category
    this.difficulty = difficulty
    DisplayQuestionBox(category, difficulty)
}
async function DisplayQuestionBox(category, difficulty) {
    if (category == 'General Knowledge' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'General Knowledge' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'General Knowledge' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Sports' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Sports' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Sports' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Computer Science' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Computer Science' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Computer Science' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'History' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'History' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'History' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Geography' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Geography' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Geography' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Politics' && difficulty == 'easy') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Politics' && difficulty == 'medium') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }
    else if (category == 'Politics' && difficulty == 'hard') {

        let response = await fetch(categoryAPIs[category][difficulty]);
        data = await response.json();
        // console.log(data)
        SettingQuestionData(data);
    }

}
function SettingQuestionData(data) {
    QuestionBox.style.display = 'block';
    mainContainer.style.display = 'none';
    document.body.style.backgroundColor = 'rgb(106, 64, 145)';
    problemStatment.textContent = data.results[currentIndex].question;
    QuestionTitle.textContent = data.results[currentIndex].category;
    let op1 = document.querySelector("#op1")
    let op2 = document.querySelector("#op2")
    let op3 = document.querySelector("#op3")
    let op4 = document.querySelector("#op4")
    let optionsArray = []
    op1.textContent = data.results[currentIndex].correct_answer
    op2.textContent = data.results[currentIndex].incorrect_answers[0]
    op3.textContent = data.results[currentIndex].incorrect_answers[1]
    op4.textContent = data.results[currentIndex].incorrect_answers[2]
    optionsArray.push(op1.textContent, op2.textContent, op3.textContent, op4.textContent)

    options.forEach(option => {
        option.addEventListener('click', function () {
            options.forEach(opt => {
                opt.classList.remove('selected')
            })
            this.classList.add('selected')
            UserSelectedOption = this.textContent

        })
    })
    // console.log(optionsArray)
    // console.log(UserSelectedOption)
}

NextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < 10) {
        let selectedOption = document.querySelectorAll('.options .selected');
        let optionSelected = false;

        selectedOption.forEach(choice => {
            if (choice.classList.contains('selected')) {
                optionSelected = true;
                // console.log(optionSelected)
            }
            if (UserSelectedOption == data.results[currentIndex - 1].correct_answer) {
                userScore++;
            }
        })

        if (!optionSelected) {
            alert("Please select one of the options");
            // console.log(optionSelected);
            return;
        }
        selectedOption.forEach(choice => {
            choice.classList.remove('selected')
        })

        SettingQuestionData(data);

    } else if (currentIndex >= 1) {
        // console.log("no more");
        NextButton.textContent = 'Finish';
        QuizResultContainer.style.display = 'flex';
        QuestionBox.style.display = 'none';
        document.body.style.backgroundColor = 'rgb(106, 64, 145)';
        UserScoreelement.textContent = userScore + 1
    }
});



function resetQuizState() {
    currentIndex = 0;
    userScore = 0;
    NextButton.textContent = 'Next';
}

MenuBtn.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    QuizResultContainer.style.display = 'none';
    document.body.style.backgroundColor = 'white';
    resetQuizState();
});

DisplayQuestionBox(category, difficulty)