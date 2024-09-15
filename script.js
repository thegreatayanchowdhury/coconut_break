document.getElementById("coconut").addEventListener("click", breakCoconut);

function breakCoconut() {
    const coconutImg = document.getElementById("coconutImg");
    const crackedCoconut = document.getElementById("crackedCoconut");
    
    const crackSound = document.getElementById("crackSound");
    const waterSound = document.getElementById("waterSound");

    // Switch the coconut image
    coconutImg.classList.add("hidden");
    crackedCoconut.classList.remove("hidden");

    // Play the crack sound
    crackSound.play();

    // Play the water pouring sound after a delay
    setTimeout(function() {
        waterSound.play();
    }, 500);

    // Trigger flower falling animation
    startFlowerFall();
}

function startFlowerFall() {
    const flowerContainer = document.getElementById("flowerContainer");
    flowerContainer.innerHTML = ''; // Clear existing flowers

    const numberOfFlowers = 20; // Number of flowers to fall

    // Array of flower image paths
    const flowerImages = [
        "flower1.png",
        "flower2.png",
        "flower3.png",
        "flower4.png",
        "flower5.png",
        "flower6.png",
        // Add paths to additional flower images here
    ];

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement("img");
        flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)]; // Randomly select a flower image
        flower.classList.add("flower");

        // Random horizontal position
        flower.style.left = Math.random() * 100 + "vw";

        // Random delay for the fall animation
        flower.style.animationDelay = Math.random() * 2 + "s";

        // Random size (optional)
        const size = Math.random() * 20 + 20; // Size between 20px and 40px
        flower.style.width = size + "px";
        flower.style.height = size + "px";

        // Add flower to the container
        flowerContainer.appendChild(flower);

        // Remove the flower after the animation ends
        flower.addEventListener("animationend", function() {
            flower.remove();
        });
    }
}
