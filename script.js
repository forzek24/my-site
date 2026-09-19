let count = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : 0;

const btn = document.getElementById('btn');
const counter = document.getElementById('counter');

counter.textContent = `Нажатий: ${count}`;

btn.addEventListener('click', () => {
    count++;
    counter.textContent = `Нажатий: ${count}`;
    localStorage.setItem('clicks', count);
});
