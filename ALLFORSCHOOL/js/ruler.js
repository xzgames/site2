const ruler = document.getElementById("ruler");
const measurementInput = document.getElementById("measurement");
const measureButton = document.getElementById("measure");

measureButton.addEventListener("click", function() {
    const rulerHeight = ruler.clientHeight; // Отримуємо висоту лінійки
    const scaleFactor = 10; // Висота в см на 100px
    const measurement = (rulerHeight / 100) * scaleFactor; // Розрахунок розміру
    measurementInput.value = `${measurement.toFixed(2)} см`;
});
