const canvas = document.querySelector("#ping-pong");
const context = canvas.getContext("2d");
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const restartBtn = document.querySelector(".restart-btn");
let gameRunning = false;
let animationId;

// Create user paddle
const user = {
    x: 0,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "red",
    score: 0
}

// Create computer paddle
const computer = {
    x: canvas.width - 10,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "black",
    score: 0
}

// Create the ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: "white"
}

// Draw user paddle
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

// Draw ball
function drawCircle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
}

// Draw scores
function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = "24px Arial";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText(text, x, y);
}

// Update game state
function update() {
    // Move ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Bounce off walls
    if (ball.y < 0 || ball.y > canvas.height - ball.radius) {
        ball.velocityY = -ball.velocityY;
    }

    // Bounce off paddles
    if (ball.x < user.x + user.width && ball.y > user.y && ball.y < user.y + user.height) {
        ball.velocityX = -ball.velocityX;
    } else if (ball.x > computer.x - ball.radius && ball.y > computer.y && ball.y < computer.y + computer.height) {
        ball.velocityX = -ball.velocityX;
    }

    // Score points
    if (ball.x < 0) {
        computer.score++;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    } else if (ball.x > canvas.width - ball.radius) {
        user.score++;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }
}

// Draw everything
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw user paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);

    // Draw computer paddle
    drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

    // Draw ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

    // Draw scores
    drawText(`User: ${user.score}`, 10, 10, "white");
    drawText(`Computer: ${computer.score}`, canvas.width - 120, 10, "white");
}

// Handle user input
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        user.y -= 10;
    } else if (e.key === "ArrowDown") {
        user.y += 10;
    }
});

// Start game
startBtn.addEventListener("click", () => {
    gameRunning = true;
    animationId = requestAnimationFrame(() => {
        update();
        draw();
        animationId = requestAnimationFrame(arguments.callee);
    });
});

// Pause game
pauseBtn.addEventListener("click", () => {
    gameRunning = false;
    cancelAnimationFrame(animationId);
});

// Restart game
restartBtn.addEventListener("click", () => {
    gameRunning = false;
    cancelAnimationFrame(animationId);
    user.score = 0;
    computer.score = 0;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    draw();
});