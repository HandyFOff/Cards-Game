let cards = ['10 ', ' Валет ', ' 7', ' Дама ', ' Туз '];

let cardsPlayer = ['6 ', ' Джокер ', ' Туз ', ' 10 ', ' 8 '];

let takeCard = prompt('Вы хотите взять карту?', 'Нет');

console.log('=========КОЛОДА ДО ВЗЯТИЯ КАРТЫ===========');
console.log(`Оригинальная колода: ${cards}`);
console.log(`Колода игрока: ${cardsPlayer}`);
console.log('=========!!Вы взяли карту!!===========');

if (takeCard == 'Да') {

    cardsPlayer.push(cards.at(-1));
    cards.pop();

    console.log(`Оригинальная колода: ${cards}`);
    console.log(`Колода игрока: ${cardsPlayer}`);

}

let giveCard = prompt('Вы хотите отдать карту?', 'Нет');

console.log('=========КОЛОДА ДО ВЗЯТИЯ КАРТЫ===========');
console.log(`Оригинальная колода: ${cards}`);
console.log(`Колода игрока: ${cardsPlayer}`);
console.log('=========!!Вы отдали карту!!===========');

if (giveCard == 'Да') {
    let whyCard = +prompt('Какую карту вы хотите дать?', '');

    cards.push(cardsPlayer[whyCard])
    delete cardsPlayer[whyCard];

    console.log(`Оригинальная колода: ${cards}`);
    console.log(`Колода игрока: ${cardsPlayer}`);
}