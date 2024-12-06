const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

function addSparkle(x, y) {
    sparkles.push({ x, y, alpha: 1 });
}

function drawSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkles.forEach((sparkle, index) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.alpha})`;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, 3, 0, Math.PI * 2);
        ctx.fill();
        sparkle.alpha -= 0.01;
        if (sparkle.alpha <= 0) sparkles.splice(index, 1);
    });
    requestAnimationFrame(drawSparkles);
}

window.addEventListener('mousemove', (e) => {
    addSparkle(e.clientX, e.clientY);
});

drawSparkles();