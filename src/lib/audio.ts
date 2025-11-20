
let audioContext: AudioContext | null = null;

const getAudioContext = () => {
    if (typeof window !== 'undefined' && !audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
};

async function playSound(url: string) {
    const context = getAudioContext();
    if (!context) {
        console.error("AudioContext is not supported in this browser.");
        return;
    }

    // Resume context on user interaction
    if (context.state === 'suspended') {
        await context.resume();
    }

    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start(0);
    } catch (error) {
        console.error("Audio playback failed:", error);
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
