function addNum(curCount) {
    curCount.innerHTML++;
    console.log(curCount.innerHTML);
}

function minusNum(curCount) {
    curCount.innerHTML--;
    console.log(curCount.innerHTML);
}

function dubNum(curCount) {
    curCount.innerHTML = curCount.innerHTML * 2;
    console.log(curCount.innerHTML);
}

function halfNum(curCount) {
    curCount.innerHTML = curCount.innerHTML / 2;
    console.log(curCount.innerHTML);
}

function clearCount(curCount) {
    curCount.innerHTML = curCount.innerHTML * 0;
    console.log(curCount.innerHTML);
}

function displayInput(textVar, target) {
    let i = textVar.value;
    target.innerHTML = i;
}

let sumArr = [];

function addNums(sum, target) {
    let i = sum.value;
    target.innerHTML += i + " + ";
    sumArr.push(i);
    sumArr.push("+");
    sum.value = 0;
}

function subtractNums(sum, target) {
    let i = sum.value;
    target.innerHTML += i + " - ";
    sumArr.push(i);
    sumArr.push("-");
    sum.value = 0;
}

function multiplyNums(sum, target) {
    let i = sum.value;
    target.innerHTML += i + " * ";
    sumArr.push(i);
    sumArr.push("*");
    sum.value = 0;
}

function divideNums(sum, target) {
    let i = sum.value;
    target.innerHTML += i + " / ";
    sumArr.push(i);
    sumArr.push("/");
    sum.value = 0;
}

function displaySum(sum, target) {
    let i = sum.value;
    let out = 0;
    target.innerHTML += i + " = ";
    sumArr.push(i);
    for (let x = 0; x < sumArr.length; x++) {
        if (sumArr[x] == "+") {
            out = parseInt(sumArr[x - 1]) + parseInt(sumArr[x + 1]);
        }
        if (sumArr[x] == "-") {
            out = parseInt(sumArr[x - 1]) - parseInt(sumArr[x + 1]);
        }
        if (sumArr[x] == "*") {
            out = parseInt(sumArr[x - 1]) * parseInt(sumArr[x + 1]);
        }
        if (sumArr[x] == "/") {
            out = parseInt(sumArr[x - 1]) / parseInt(sumArr[x + 1]);
        }
    }
    //out = parseInt(sumArr[0]) + parseInt(sumArr[2]);
    target.innerHTML += out;
    sum.value = 0;
}

function resetsSum(target) {
    sumArr = [];
    target.innerHTML = "";
    console.log(target.innerHTML);
}

const shoppingList = "";

function addItem(textVar, target) {
    let i = textVar.value;
    console.log(i);

    if (i == "add an item") {
        return "";
    }

    if (i == "enter next item") {
        return "";
    }

    let shoppingList = target.innerHTML;
    console.log(shoppingList);

    target.innerHTML += i + ", ";
    console.log(target.innerHTML);

    textVar.value = "enter next item";
}

// const currentCart = [];

const currentCart = ['bacon', 'bread', 'eggs'];

// const cartObject = {};

const cartObject = {
    'Price': 0,
    'Name': "",
    'Amount': 0
};

function addObj(obj, target) {
    currentCart.push(obj);
    console.log(obj);
}

function removeObj() {

}