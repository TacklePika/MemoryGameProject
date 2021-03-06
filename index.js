/* matching cards section */
/* Three gameboard cards merged into one document at mentoring session  */

const TWELVE_CARDS = [
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
];

const EIGHTEEN_CARDS = [
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
  {
    name: "tiger",
    img: "images/tiger.jpg",
  },
  {
    name: "tiger",
    img: "images/tiger.jpg",
  },
  {
    name: "turtle",
    img: "images/turtle.jpg",
  },
  {
    name: "turtle",
    img: "images/turtle.jpg",
  },
  {
    name: "zebra",
    img: "images/zebra.jpg",
  },
  {
    name: "zebra",
    img: "images/zebra.jpg",
  },
];

const TWENTY_FOUR_CARDS = [
  {
    name: "bird",
    img: "images/bird.jpg",
  },
  {
    name: "bird",
    img: "images/bird.jpg",
  },
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "camel",
    img: "images/camel.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "koala",
    img: "images/koala.jpg",
  },
  {
    name: "koala",
    img: "images/koala.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "leopard",
    img: "images/leopard.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "lion",
    img: "images/lion.jpg",
  },
  {
    name: "panda",
    img: "images/panda.jpg",
  },
  {
    name: "panda",
    img: "images/panda.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
  {
    name: "rhino",
    img: "images/rhino.jpg",
  },
  {
    name: "tiger",
    img: "images/tiger.jpg",
  },
  {
    name: "tiger",
    img: "images/tiger.jpg",
  },
  {
    name: "turtle",
    img: "images/turtle.jpg",
  },
  {
    name: "turtle",
    img: "images/turtle.jpg",
  },
  {
    name: "zebra",
    img: "images/zebra.jpg",
  },
  {
    name: "zebra",
    img: "images/zebra.jpg",
  },
];

const CARDS = {
'12': TWELVE_CARDS,
'18': EIGHTEEN_CARDS,
'24': TWENTY_FOUR_CARDS
}

let allCards = [];

function setCards(cardNumber) {
   allCards = CARDS[cardNumber];
   allCards.sort(() => 0.5 - Math.random());
   createBoard();
}
/* end of card section */

/* game board section */
/* Memory Game Javascript source code from external source: Code with Ania Kubow YouTube video tutorial */
/* allCards.sort(() => 0.5 - Math.random()); */
const grid = document.getElementsByClassName("grid")[0];
const score = document.getElementById("result");
let compareArray = [];
let boardIdChosen = [];
let points = 0;

function createBoard() {
  score.textContent = points;
  for (let i = 0; i < allCards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/bricks.jpg");
    card.setAttribute("boardId", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const [card1, card2] = compareArray;
  const [boardId1, boardId2] = boardIdChosen;
  if (card1 === card2 && boardId1 !== boardId2) {
    cards[boardId1].setAttribute("src", "./images/white.jpg");
    cards[boardId2].setAttribute("src", "./images/white.jpg");
    cards[boardId1].removeEventListener("click", flipCard);
    cards[boardId2].removeEventListener("click", flipCard);
    points++;
    score.textContent = points;
    if (points === cards.length / 2) {
      setTimeout(() => alert("WELL DONE!!!"), 10);
    }
  } else {
    cards[boardId1].setAttribute("src", "./images/bricks.jpg");
    cards[boardId2].setAttribute("src", "./images/bricks.jpg");
  }
  boardIdChosen = [];
  compareArray = [];
}

function flipCard() {
  const boardId = this.getAttribute("boardId");
  this.setAttribute("src", allCards[boardId].img);
  boardIdChosen.push(boardId);
  compareArray.push(allCards[boardId].name);
  console.log(compareArray);
  console.log(boardIdChosen);
  if (compareArray.length === 2) {
    setTimeout(() => checkMatch(), 800);
  } else if (compareArray.length > 2) {
    const cards = document.querySelectorAll("img");
    boardIdChosen.map((id) =>
      cards[id].setAttribute("src", "./images/bricks.jpg")
    );
    boardIdChosen = [];
    compareArray = [];
  }
}
/* end of board section */

/* restart button */
/* Javascript source code from external source: codegrepper.com tutorial */
const reloadButton = document.querySelector("#restart");

function reload() {
  reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);
/* end of button */
