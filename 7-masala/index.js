let son = 1234;
let natija = juftRaqamlarTopuvchi(son);
console.log(natija);

function juftRaqamlarTopuvchi(son) {

    son = Math.ceil(son / 2) * 2;

    return son;
}
