document.addEventListener("DOMContentLoaded", function (event) {
  const cardBtn = document.querySelector(".card__btn");
  const id = document.querySelector(".card__title span");
  const quote = document.querySelector(".card__quote");
  const url = `https://api.adviceslip.com/advice`;

  fetchRandomAdvice(url, id, quote);

  cardBtn.addEventListener("click", () => {
    // fetch(url)
    //   .then((res) => {
    //     res.json().then((data) => {
    //       console.log(data);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetchRandomAdvice(url, id, quote);
  });
});

const fetchRandomAdvice = (url, id, quote) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      quote.innerHTML = data.slip.advice;
    })
    .catch((err) => {
      console.log(err);
    });
};
