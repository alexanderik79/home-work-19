// --------------- Рандомне число з дыапазону ------------------ //

const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const randomNumber = document.getElementById("randomNumber");

minRange.addEventListener("input", function() {
    if (parseInt(minRange.value) > parseInt(maxRange.value)) {
        minRange.value = maxRange.value;
    }
    minValue.textContent = minRange.value;
});

maxRange.addEventListener("input", function() {
    if (parseInt(maxRange.value) < parseInt(minRange.value)) {
        maxRange.value = minRange.value;
    }
    maxValue.textContent = maxRange.value;
});

function generateRandom() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber.textContent = random;
    console.log(random);
}


// ----------------- сумма ----------------//
function sumBigIntegers(numStr1, numStr2) {
    return BigInt(numStr1) + BigInt(numStr2);
}

function calculateSum() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = sumBigIntegers(num1, num2);
    document.getElementById("result").textContent = `Сума: ${result}n`;
    console.log(result);
}