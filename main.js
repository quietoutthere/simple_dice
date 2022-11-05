const dice = document.getElementById('dice');
dice.addEventListener('click', function (e) {
    const sides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const roll = Math.floor(Math.random() * sides.length);
    const display = document.getElementById('input');
    display.textContent = sides[roll];
    console.log(sides[roll]);
})