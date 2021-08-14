var board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2]
];

function draw() {
    let out = '';
    document.querySelector('#board').innerHTML = '';
    let m = 0;
    for (let i = 0; i < board.length; i++) {
        let arr = board[i];
        for (let k = 0; k < arr.length; k++) {
            if (m % 2 == 0) {
                document.querySelector('#board').innerHTML += '<div class="block bg-white" data-x="' + k + '" data-y="' + i + '"></div>';

            }
            else {
                document.querySelector('#board').innerHTML += '<div class="block" data-x="' + k + '" data-y="' + i + '"></div>';

            }
            m++;
        }
        m++;
    }
    document.querySelectorAll('.block').forEach(function (element) {
        element.onclick = horse;
    })
}

function horse() {
    document.querySelectorAll('.block').forEach(function (element) {
        element.classList.remove('active', 'selected');
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selected');
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector('.block[data-x="' + (+x + 2) + '"][data-y="' + (+y + 1) + '"]').classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector('.block[data-x="' + (+x + 2) + '"][data-y="' + (+y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
        document.querySelector('.block[data-x="' + (+x + 1) + '"][data-y="' + (+y + 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector('.block[data-x="' + (+x - 1) + '"][data-y="' + (+y + 2) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector('.block[data-x="' + (+x - 2) + '"][data-y="' + (+y + 1) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
        document.querySelector('.block[data-x="' + (+x - 2) + '"][data-y="' + (+y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && y - 2 >= 0) {
        document.querySelector('.block[data-x="' + (+x + 1) + '"][data-y="' + (+y - 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        document.querySelector('.block[data-x="' + (+x - 1) + '"][data-y="' + (+y - 2) + '"]').classList.add('active');
    }
}

draw();