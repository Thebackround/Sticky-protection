// Get player and enemy elements
const player = document.getElementById('player');
const enemy = document.getElementById('enemy');

// To store the initial position of the player
const playerSpeed = 10;
let playerX = 0;
let playerY = 0;
let isAttacking = false;

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            playerY -= playerSpeed;
            break;
        case 'ArrowDown':
            playerY += playerSpeed;
            break;
        case 'ArrowLeft':
            playerX -= playerSpeed;
            break;
        case 'ArrowRight':
            playerX += playerSpeed;
            break;
        case 'q': // Attack left
            attack('left');
            return; // Prevent default action
        case 'e': // Attack right
            attack('right');
            return; // Prevent default action
    }

    // Update player position
    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
});

// Function to handle attacking
function attack(direction) {
    if (isAttacking) return; // Prevent multiple attacks at once
    isAttacking = true;

    const leftArm = player.querySelector('.arm.left');
    const rightArm = player.querySelector('.arm.right');

    if (direction === 'left') {
        leftArm.style.animation = 'attack-left 0.5s forwards'; // Attack left
        rightArm.style.animation = ''; // Reset right arm
    } else if (direction === 'right') {
        rightArm.style.animation = 'attack-right 0.5s forwards'; // Attack right
        leftArm.style.animation = ''; // Reset left arm
    }

    // Reset the attack state after animation ends
    setTimeout(() => {
        leftArm.style.animation = ''; // Clear the left arm animation
        rightArm.style.animation = ''; // Clear the right arm animation
        isAttacking = false; // Allow next attack
    }, 500); // Match this with the animation duration
}
