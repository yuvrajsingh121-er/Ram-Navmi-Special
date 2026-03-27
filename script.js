const playBtn = document.getElementById('playBtn');
const music = document.getElementById('bgMusic');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        music.play();
        playBtn.innerText = "Pause Song ⏸️";
        isPlaying = true;
    } else {
        music.pause();
        playBtn.innerText = "Play Devotional Song 🎵";
        isPlaying = false;
    }
});

// Subtle animation: Flower Petal Fall (Optional logic)
// You can add a canvas effect here for falling flowers!