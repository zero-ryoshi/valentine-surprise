const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth - 50;
    const y = Math.random() * window.innerHeight - 50;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    message.innerText = "Yay! I knew you'd say yes! ❤️";
});
