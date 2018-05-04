import cards from 'redux/cards/cardsData';

const levelToNum = {
  easy: 6,
  medium: 8,
  hard: 12,
};

export const getCards = (level) => {
  const cardsFromApi = cards;
  const result = randomizeCards(cardsFromApi, levelToNum[level])
  return result;
}

const randomizeCards = (cardsFromApi, num) => {
    //doubles each card and randomizes order
    const newCards = cardsFromApi.slice(0, num).concat(cardsFromApi.slice(0, num)).map(card => Object.assign({}, card));//making dups
    const shuffledCards = shuffle(newCards);
    //Resetting selected prop to false on repressing the button
    const cardsWithProps = shuffledCards.map(card => {
      card.status = 'hidden';
      card.selected = false;
      card.matched = false;
      return card;
    });
    return [...cardsWithProps];
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
