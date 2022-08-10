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