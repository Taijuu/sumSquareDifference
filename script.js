const btn = document.querySelector(".btn"),
    input = document.querySelector(".input"),
    div = document.querySelector(".result");

btn.addEventListener("click", () => {
    let sumSquareLet = 0,
        squareSumLet = 0;

    div.innerHTML = null;

    function sumSquare(num) {
        for (var i = 1; i <= num; i++) {
            sumSquareLet += Math.pow(i, 2);
            i < num ? i === 1 ? div.innerHTML += `${i}² ` : div.innerHTML += `+ ${i}² ` : div.innerHTML += `+ ${num}² = ${sumSquareLet} <br>`;
        }
        return sumSquareLet;
    }

    function squareSum(num) {
        for (var i = 1; i <= num; i++) {
            squareSumLet += i;
            i < num ? i === 1 ? div.innerHTML += `(${i} ` : div.innerHTML += `+ ${i} ` : div.innerHTML += `+ ${num})² = ${Math.pow(squareSumLet, 2)} <br>`;
        }
        return Math.pow(squareSumLet, 2);
    }

    function sumSquareDifference(numLimite) {
        var a = squareSum(numLimite);
        var b = sumSquare(numLimite);
        div.innerHTML += `${a} - ${b} = ${a - b}`;
        return a - b;
    }

    sumSquareDifference(input.value)
})