(function () {


// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
let array = []

function createNumbersArray(cardsCount) {


  for (let i = 1; i <= cardsCount / 2; i++) {
      array.push(i, i);

  }

 console.log(cardsCount)

  console.log(array)

}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]

  }


  console.log(arr)
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

let open = false;
let success = false;
let firstCard = null;
let secondCard = null;


function closeCard() {
  open = true;
  setTimeout(() => {
    firstCard.classList.remove('open');
    secondCard.classList.remove('open');
    open = false;
    success = false;
    firstCard = null;
    secondCard = null;
  }, 500)
}

function successCard() {
  if (firstCard.textContent == secondCard.textContent) {
    firstCard.classList.add('success');
    secondCard.classList.add('success');

} else closeCard()
}

function startGame(cardsCount) {

  const arrayResult = createNumbersArray(cardsCount);
  const arraySort = shuffle(array);

  let table = document.createElement('table');
  let row = Math.sqrt(cardsCount);

  for (let i = 1; i <= row; i++) {
    let tr = document.createElement('tr');
    tr.classList.add('row');
    table.append(tr);
    for (let j = 1; j <= row; j++) {
      let td = document.createElement('td');
    td.classList.add('card');
    tr.append(td);
  }

  }

game.append(table)


  let cards = document.querySelectorAll('.card')

  for (let i = 0; i < cards.length; i++) {
    cards[i].textContent = array[i]
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function() {
      if (this == firstCard) return
  this.classList.add('open');
  if (open == false) {
    open = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  open = false;

  successCard()

let successCards = document.querySelectorAll('.success').length / 2;
console.log(successCards)
console.log(cardsCount)

if (successCards == cardsCount / 2) {
  setTimeout(win, 200)
}
    })
  })

}

function win() {
  let startBtn = document.querySelector('.btn');
  startBtn.disabled = true;

  let block = document.createElement('div');
  let h2 = document.createElement('h2');
  let btn = document.createElement('button');
  block.classList.add('block');
  h2.classList.add('subtitle');
  btn.classList.add('resetBtn');
  h2.textContent = 'Поздравляю, вы победили!!!';
  btn.textContent = 'Сыграть еще раз';
  container.append(block);
  block.append(h2);
  block.append(btn);

  btn.addEventListener('click', () => {
    block.remove();
    let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.remove()
  })
  let input = document.querySelector('.input');
  input.value = '';
  startBtn.disabled = false;
  })
}


function createForm() {
  let h1 = document.createElement('h1');
  h1.textContent = 'Введите четное количество карточек в строке: ';
  h1.classList.add('title')
  game__top.append(h1);

  let input = document.createElement('input');
  input.classList.add('input')
  game__top.append(input);

  let startBtn = document.createElement('button');
  startBtn.textContent = 'Начать игру';
  startBtn.classList.add('btn')
  game__top.append(startBtn);

   input.addEventListener('change', () => {
    if (input.value > 10 || input.value < 2 || input.value < 0 || input.value % 2 !== 0) {
      input.value = 4;
    }

    startBtn.disabled = false;

  startBtn.addEventListener('click', () => {
    array = []
    let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.remove()
  })
   let cardsCount = input.value * input.value;
     startGame(cardsCount)

  })
})
}

createForm()

})()











