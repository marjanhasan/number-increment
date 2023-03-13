let count = 0;
const num = document.getElementById('number');
const initial = () => {
    count = localStorage.getItem('num');
    num.innerText = count;
}
const add = () => {
    num.innerText = ++count;
    localStorage.setItem('num',count);
}
const clr = () => {
    count = 0;
    num.innerText = count;
    localStorage.setItem('num',count);
}
const minus = () => {
    num.innerText = --count;
    localStorage.setItem('num',count);
}

