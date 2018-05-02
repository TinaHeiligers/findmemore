import cards from 'redux/cards/cardsData';

const levelToNum = {
  easy: 12,
  medium: 16,
  hard: 18,
};

export const getCards = (level) => {
  const cardsFromApi = cards;
  const result = randomizeCards(cardsFromApi, levelToNum[level])
  console.log(result)
  return result;
}

const randomizeCards = (cardsFromApi, num) => {
    //doubles each card and randomizes order
    const newCards = cardsFromApi.slice(0, num).concat(cardsFromApi.slice(0, num)).map(card => Object.assign({}, card));//making dups
    const shuffledCards = shuffle(newCards);
    //Resetting selected prop to false on repressing the button
    console.log('shuffledCards', shuffledCards)
    const cardsWithProps = shuffledCards.map(card => {
      card.status = 'hidden';
      card.selected = false;
      card.matched = false;
      return card;
    });
    console.log('cardsWithProps', [...cardsWithProps])
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
