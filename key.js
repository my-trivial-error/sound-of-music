var A5, B5, C5, D5, E5, F5, G5, A6;
A5 = 440;
B5 = 493.886;
C5 = 524;
D5 = 587.33;
E5 = 659.25;
F5 = 698.45;
G5 = 775.08;
A6 = 880;
function note(freq, duration, vol) {
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
