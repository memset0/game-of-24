function gen() {
  const charsetX = ['c', 'd', 'h', 's'];
  const charsetY = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	// const charsetY = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
	
  const charset = [];
  for (let i = 0; i < charsetX.length; i++)
    for (let j = 0; j < charsetY.length; j++) {
      charset.push(charsetX[i] + charsetY[j]);
    }
  const cards = [];
  while (cards.length < 4) {
    const k = Math.floor(Math.random() * charset.length);
    if (!cards.includes(charset[k])) {
      cards.push(charset[k]);
    }
  }
  console.log(cards);
  for (let i = 0; i < 4; i++) {
    document.getElementById('card' + (i + 1)).src = './card/' + cards[i] + '.png';
  }
}

gen();
