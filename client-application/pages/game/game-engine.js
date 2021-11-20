
let currentQuestion = 0;

$(window).on('load', function () {
    loadQuiz();
})

function loadQuiz() {
    $('#quiz-question-text').text(questions[0].question)
}
