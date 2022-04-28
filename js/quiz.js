const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true

let SpainScore = 0
let MaltaScore = 0
let UKScore = 0
let IcelandScore = 0
let CroatiaScore = 0
let BulgariaScore = 0

let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Do you prefer warmer or colder climate?',
        choice1: 'Warmer',
        choice2: 'Colder',
        choice3: 'No preference',
        answer: 2,
    },
    {
        question:"What kind of food do you prefer most?",
        choice1: "Traditional",
        choice2: "Seafood",
        choice3: "Rice-based",
        choice4: "Spicy food",
        answer: 1,
    },
    {
        question: "Are you interested in the destination's nightlife?",
        choice1: "Yes",
        choice2: "No",
        choice3: "No preference",
        answer: 3,
    },
    {
        question: "Are you travelling with a partner?",
        choice1: "Yes",
        choice2: "No",
        choice3: "With friends",
        answer: 1,
    },
    {
        question: "Do you like going to football matches?",
        choice1: "Yes",
        choice2: "No",
        choice3: "No preference",
        answer: 1,
    },
    {
        question: "Visit only the capital city or travel around the country?",
        choice1: "Capital only",
        choice2: "Around the country",
        answer: 1,
    },
    {
        question: "Do you prefer urban atmosphere or nature?",
        choice1: "Urban",
        choice2: "Nature",
        choice3: "No preference",
        answer: 1,
    },
    {
        question: "What do you want to see out of your window?",
        choice1: "The beach",
        choice2: "The mountains",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        var locationScores = {};

        locationScores["Spain"] = SpainScore;
        locationScores["Malta"] = MaltaScore;
        locationScores["UK"] = UKScore;
        locationScores["Iceland"] = IcelandScore;
        locationScores["Croatia"] = CroatiaScore;
        locationScores["Bulgaria"] = BulgariaScore;
    
        var values = Object.keys(locationScores).map(function(key){
            return locationScores[key];});
        var highScore = Math.max.apply(null, values)

        for(var key in locationScores)
        {
            if(highScore == locationScores[key])
            {
                var highScoreDestination = key
            }
            console.log(key, locationScores[key])
        }

        localStorage.setItem('highScore', highScore)
        localStorage.setItem('highScoreDestination', highScoreDestination)

        return window.location.assign('./endresult.html')
    }

    

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
  
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

    if(currentQuestion == questions[0] || currentQuestion == questions[2] || currentQuestion == questions[3] || currentQuestion == questions[4] || currentQuestion == questions[6])
    {
        var x = document.getElementById("extraChoice")
        x.style.display = "none"
    }

    if(currentQuestion == questions[5] || currentQuestion == questions[7])
    {
        var x = document.getElementById("extraChoice")
        x.style.display = "none"

        var z = document.getElementById("thirdChoice")
        z.style.display= "none"
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = 'correct'

        selectedChoice.parentElement.classList.add(classToApply)

        if(currentQuestion == questions[0])
        {
            if(selectedAnswer==1)
            {
                SpainScore+=2
                MaltaScore+=2
            }
            else if(selectedAnswer==2)
            {
                UKScore+=2
                IcelandScore+=2
            }
            else
            {
                SpainScore++
                MaltaScore++
                UKScore++
                IcelandScore++
                BulgariaScore++
                CroatiaScore++
            }
        }

        if(currentQuestion == questions[1])
        {
            if(selectedAnswer==1)
            {
                BulgariaScore+=2
                CroatiaScore+=2
            }
            else if(selectedAnswer==2)
            {
                UKScore+=2
                SpainScore+=2
                MaltaScore+=2
            }
            else if(selectedAnswer==3)
            {
                SpainScore+=2
                CroatiaScore+=2
            }
            else
            {
                SpainScore+=2
            }
        }

        if(currentQuestion == questions[2])
        {
            if(selectedAnswer==1)
            {
                BulgariaScore+=2
                CroatiaScore+=2
                UKScore+=2
            }
            else if(selectedAnswer==2)
            {
                IcelandScore+=2
                SpainScore+=2
                MaltaScore+=2
            }
            else
            {
                IcelandScore++
                SpainScore++
                BulgariaScore++
                CroatiaScore++
                UKScore++
                MaltaScore++
            }
        }

        if(currentQuestion == questions[3])
        {
            if(selectedAnswer==1)
            {
                IcelandScore+=2
                SpainScore+=2
                MaltaScore+=2
                CroatiaScore+=2
            }
            else if(selectedAnswer==2)
            {
                BulgariaScore+=2
                UKScore+=2
            }
            else
            {
                IcelandScore++
                SpainScore++
                BulgariaScore++
                CroatiaScore++
                UKScore++
                MaltaScore++
            }
        }

        if(currentQuestion == questions[4])
        {
            if(selectedAnswer==1)
            {
                BulgariaScore+=2
                SpainScore+=2
                UKScore+=2
            }
            else if(selectedAnswer==2)
            {
                IcelandScore+=2
                Malta+=2
                CroatiaScore+=2
            }
            else
            {
                IcelandScore++
                SpainScore++
                BulgariaScore++
                CroatiaScore++
                UKScore++
                MaltaScore++
            }
        }

        if(currentQuestion == questions[5])
        {
            if(selectedAnswer==1)
            {
                BulgariaScore+=2
                SpainScore+=2
                UKScore+=2
            }
            else if(selectedAnswer==2)
            {
                IcelandScore+=2
                MaltaScore+=2
                CroatiaScore+=2
            }
        }

        if(currentQuestion == questions[6])
        {
            if(selectedAnswer==1)
            {
                SpainScore+=2
                MaltaScore+=2
                UKScore+=2
            }
            else if(selectedAnswer==2)
            {
                IcelandScore+=2
                BulgariaScore+=2
                CroatiaScore+=2
            }
            else
            {
                IcelandScore++
                SpainScore++
                BulgariaScore++
                CroatiaScore++
                UKScore++
                MaltaScore++
            }
        }

        if(currentQuestion == questions[7])
        {
            if(selectedAnswer==1)
            {
                SpainScore+=2
                MaltaScore+=2
            }
            else if(selectedAnswer==2)
            {
                IcelandScore+=2
                BulgariaScore+=2
            }
        }

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            if(currentQuestion == questions[1])
            {
                var x = document.getElementById("extraChoice")
                x.style.display = "flex"
                var z = document.getElementById("thirdChoice")
                z.style.display= "flex"
            }
            if(currentQuestion != questions[5] && currentQuestion != questions[7])
            {
                var z = document.getElementById("thirdChoice")
                z.style.display= "flex"
            }
        
        }, 1000)
    })
})

startGame()