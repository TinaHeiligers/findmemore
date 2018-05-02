import cards from 'redux/cards/cardsData';

const levelToNum = {
  easy: 12,
  medium: 16,
  hard: 18,
};

export const getCards = (level) => {
  return randomizeCards(levelToNum[level]);
}

const randomizeCards = (num) => {
    //doubles each card and randomizes order
    const newCards = cards.slice(0, num).concat(cards.slice(0, num)).map(card => Object.assign({}, card));//making dups
    const shuffledCards = shuffle(newCards);
    //Resetting selected prop to false on repressing the button
    shuffledCards.forEach(card => {
      card.selected = false;
      card.matched = false;
    });
    console.log([...shuffledCards])
    return [...shuffledCards];
}

const shuffle = (arr) => {
  let currentIndex = arr.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};
