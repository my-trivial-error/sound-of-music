var A, B, C, D, E, F, G;
A = 440;
B = 493.886;
C = 524;
D = 587.33;
E = 659.25;
F = 698.45;
G = 775.08;
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
