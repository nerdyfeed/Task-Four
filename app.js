var arr = [
    'A1','A2','A3','A4','A5','A6','A7',
    'B1','B2','B3','B4','B5','B6','B7',
    'C1','C2','C3','C4','C5','C6','C7',
    'D1','D2','D3','D4','D5','D6','D7',
    'E1','E2','E3','E4','E5','E6','E7',
    'F1','F2','F3','F4','F5','F6','F7',
    'G1','G2','G3','G4','G5','G6','G7',
    'H1','H2','H3','H4','H5','H6','H7',
]; //Массив доски

function getMove(block) {
    var a = arr.indexOf(block);
    var steps = [arr[a-9],arr[a+5],arr[a+13],arr[a+15],arr[a+9],arr[a-5],arr[a-15],arr[a-13]];
    // Очистка массива от мусора
    var filtered = steps.filter(function (el) {
        return el != null;
      });
      // Заливка цветом возможных ходов
    for(i = 0; i < filtered.length ; i++) {
            document.getElementsByClassName(filtered[i])[0].style.background = "#12c329";
    }
}
// Обработка нажатий
document.body.onclick = function (e) {
    e = e || event;
    var target = e.target || e.srcElement;
    var block = target.getAttribute("class")
    target.style.background = "#1220c3";
    getMove(block);
}