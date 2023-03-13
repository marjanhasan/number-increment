let count = 0;
const num = document.getElementById('number');
const initial = () => {
    loc = localStorage.getItem('num');
    loc === null ? (count = 0) : (count = loc);
    num.innerText = count;
}
const add = () => {
    num.innerText = ++count;
    localStorage.setItem('num',count);
}
const clr = () => {
    localStorage.clear();
    count = 0;
    num.innerText = count;
}
const minus = () => {
    num.innerText = --count;
    localStorage.setItem('num',count);
}

