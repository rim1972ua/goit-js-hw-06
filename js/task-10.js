function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів
// в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.

// const createBtn = document.querySelector('button[data-action="create"]');
// console.log(createBtn.dataset.action);

// const destroyBtn = document.querySelector('button[data-action="destroy"]');
// console.log(destroyBtn.dataset.action);

const controls = document.getElementById("controls");

const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxes.innerHTML = "<div class=box>box</div>";
    console.log(boxes.innerHTML.value);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.addEventListener("click", (event) => {
  if ((event.target = document.querySelector('button[data-action="create"]'))) {
    createBoxes(document.querySelector("input").value);
  } else if (
    (event.target = document.querySelector('button[data-action="destroy"]'))
  ) {
    destroyBoxes();
  }
});
