let max_words = 0;
let singol_word = '';
let multi_words = [];

let inputSelect = document.getElementById('inputSelect');
let numberWordsFree = document.getElementById('numberWordsFree');
let randomWords = document.getElementById('result_Words');



inputSelect.addEventListener('click', function () {
  numberWordsFree.value = null;
  max_words = inputSelect.value;
  getWords(max_words);
});

numberWordsFree.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    inputSelect.value = 0;
    max_words = numberWordsFree.value;
    getWords(max_words);
  }
});



function getRandomWord() {
  let word = axios.get(`https://flynn.boolean.careers/exercises/api/random/word`)
    .then((response) => {
      if (response.status === 200) {
        singol_word = response.data.response;
        return singol_word;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return word;
}

function getWords(length_word) {
  multi_words = [];
  randomWords.innerHTML = '';

  for (let i = 0; i < length_word; i++) {
    getRandomWord().then(function (value) {
      randomWords.innerHTML += `${value} ` ;
    })
  }
}