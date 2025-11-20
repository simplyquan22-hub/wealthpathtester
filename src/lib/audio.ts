
function playSound(url: string) {
    if (typeof window !== 'undefined') {
        const audio = new Audio(url);
        audio.play().catch(error => {
            // Autoplay was prevented.
            console.error("Audio playback failed:", error);
        });
    }
}

export function playCorrectSound() {
    // A pleasant chime sound
    playSound('https://actions.google.com/sounds/v1/cartoon/magic_chime.ogg');
}

export function playIncorrectSound() {
    // A classic error sound
    playSound('https://actions.google.com/sounds/v1/errors/error_classic.ogg');
}
