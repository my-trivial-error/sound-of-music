var A2, B2, C2, D2, E2, F2, G2, A3, B3, C3, D3, E3, F3, G3;
var A4, B4, C4, D4, E4, F4, G4, A5, B5, C5, D5, E5, F5, G5;
var A6, B6, C6, D6, E6, F6, G6, A7, B7, C7, D7, E7, F7, G7;
A5 = 440;B5 = 493.89;C5 = 523.25;D5 = 587.33;E5 = 659.25;F5 = 698.45;G5 = 775.08;
A6 = A5*2;B6 = B5*2;C6 = C5*2;D6 = D5*2;E6 = E5*2;F6 = F5*2;G6 = G5*2;
A4 = A5/2;B4 = B5/2;C4 = C5/2;D4 = D5/2;E4 = E5/2;F4 = F5/2;G4 = G5/2;
function note(freq, duration, vol) {
    var context = new(window.AudioContext || window.webkitAudioContext);
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.002);
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "sine";
    gain.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * .001);
    oscillator.onended = () => context.close();
}
