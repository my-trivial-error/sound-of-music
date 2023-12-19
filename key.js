var A[], B[], C[], D[], E[], F[], G[];
A[5] = 440;
B[5] = 493.886;
C[5] = 524;
D[5] = 587.33;
E[5] = 659.25;
F[5] = 698.45;
G[5] = 775.08;
A[6] = 880;
function beep(freq, duration, vol) {
    var context = new(window.AudioContext || window.webkitAudioContext);
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.002);
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "square";
    gain.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * .001);
    oscillator.onended = () => context.close();
}
