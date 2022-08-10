const container = document.querySelectorAll(`.question-cont`);
container.forEach(function (question) {
  const questions = question.querySelector(`.question`);
  questions.addEventListener(`click`, function () {
    container.forEach(function (hide) {
      if (hide !== question) {
        hide.classList.remove(`show-answer`);
      }
    });

    question.classList.toggle(`show-answer`);
  });
});
