const major4octave = ["G flat Major Four-Octave Scale", "G major Four-Octave Scale", "A flat major Four-Octave Scale", "A major Four-Octave Scale", "B flat major Four-Octave Scale", "B major Four-Octave Scale"];
const harmonicMinor4octave = ["G flat harmonic minor Four-Octave Scale", "G harmonic minor Four-Octave Scale", "A flat harmonic minor Four-Octave Scale", "A harmonic minor Four-Octave Scale", "B flat harmonic minor Four-Octave Scale", "B harmonic minor Four-Octave Scale"];
const melodicMinor4octave = ["G flat melodic minor Four-Octave Scale", "G melodic minor Four-Octave Scale", "A flat melodic minor Four-Octave Scale", "A melodic minor Four-Octave Scale", "B flat melodic minor Four-Octave Scale", "B melodic minor Four-Octave Scale"];
const sep3 = ["Separated by 3rd G flat major scale", "Separated by 3rd G major scale", "Separated by 3rd A flat major scale"];
const sep6 = ["Separated by 6th A major scale", "Separated by 6th B flat major scale", "Separated by 6th B major scale"];
const inOctavesMajor = ["B flat major in octaves", "B major in octaves"];
const inOctavesMinor = ["B flat minor harmonic and melodic in octaves", "B minor harmonic and melodic in octaves"];
const chromaticInOctaves = ["F sharp chromatic in octaves", "G chromatic in octaves", "G sharp chromatic in octaves", "A chromatic in octaves", "A sharp chromatic in octaves", "B chromatic in octaves"]
const fourNoteChordsMajor = ["G flat Major four-note chords root position and inversions", "G major four-note chords root position and inversions", "A flat major four-note chords root position and inversions", "A major four-note chords root position and inversions", "B flat major four-note chords root position and inversions", "B major four-note chords root position and inversions"];
const fourNoteChordsMinor = ["G flat Minor four-note chords root position and inversions", "G Minor four-note chords root position and inversions", "A flat Minor four-note chords root position and inversions", "A Minor four-note chords root position and inversions", "B flat Minor four-note chords root position and inversions", "B Minor four-note chords root position and inversions"];
const dominant7th = ["G flat Major dominant 7th chords root position and inversions", "G Major dominant 7th chords root position and inversions", "A flat Major dominant 7th chords root position and inversions", "A Major dominant 7th chords root position and inversions", "B flat Major dominant 7th chords root position and inversions", "B Major dominant 7th chords root position and inversions"];
const dim7th = ["G flat Minor diminished 7th chords root position and inversions", "G Minor diminished 7th chords root position and inversions", "A flat Minor diminished 7th chords root position and inversions", "A Minor diminished 7th chords root position and inversions", "B flat Minor diminished 7th chords root position and inversions", "B Minor diminished 7th chords root position and inversions"];
const majorTonicArp = ["G flat Major tonic arpeggios root position and inversions", "G major tonic arpeggios root position and inversions", "A flat major tonic arpeggios root position and inversions", "A major tonic arpeggios root position and inversions", "B flat major tonic arpeggios root position and inversions", "B major tonic arpeggios root position and inversions"];
const minorTonicArp = ["G flat Minor tonic arpeggios root position and inversions", "G Minor tonic arpeggios root position and inversions", "A flat Minor tonic arpeggios root position and inversions", "A Minor tonic arpeggios root position and inversions", "B flat Minor tonic arpeggios root position and inversions", "B Minor tonic arpeggios root position and inversions"];
const dom7Arp = ["G flat Major dominant 7th arpeggios root position and inversions", "G Major dominant 7th arpeggios root position and inversions", "A flat Major dominant 7th arpeggios root position and inversions", "A Major dominant 7th arpeggios root position and inversions", "B flat Major dominant 7th arpeggios root position and inversions", "B Major dominant 7th arpeggios root position and inversions"];
const dim7Arp = ["G flat Major diminished 7th arpeggios root position and inversions", "G Major diminished 7th arpeggios root position and inversions", "A flat Major diminished 7th arpeggios root position and inversions", "A Major diminished 7th arpeggios root position and inversions", "B flat Major diminished 7th arpeggios root position and inversions", "B Major diminished 7th arpeggios root position and inversions"];
const all = [major4octave, harmonicMinor4octave, melodicMinor4octave, sep3, sep6, inOctavesMajor, inOctavesMinor, chromaticInOctaves, fourNoteChordsMinor, fourNoteChordsMajor, dominant7th, dim7th, majorTonicArp, minorTonicArp, dim7Arp, dom7Arp];
const justScales = [major4octave, harmonicMinor4octave, melodicMinor4octave, sep3, sep6, inOctavesMajor, inOctavesMinor, chromaticInOctaves];
const justChords = [fourNoteChordsMajor, fourNoteChordsMinor, dominant7th, dim7th];
const justArpeggios = [majorTonicArp, minorTonicArp, dom7Arp, dim7Arp];

function checkboxStatus() { // Get status of checkboxes
    let scales = document.getElementById("scales-check").checked;
    let chords = document.getElementById("chords-check").checked;
    let arps = document.getElementById("arpeggios-check").checked;
    return [scales, chords, arps];
}

function onGenerate() {
    let selected = [];
    let textObject = document.getElementById("scale-text");
    let tipObject = document.getElementById("tip-text");
    let currentText = textObject.innerHTML;
    let checked = checkboxStatus();
    if (checked[0]) { // Get filter options
        selected = selected.concat(justScales);
    }
    if (checked[1]) {
        selected = selected.concat(justChords);
    }
    if (checked[2]) {
        selected = selected.concat(justArpeggios);

    }
    let scale = pickSubsection(pickSubsection(selected));
    while (currentText == scale) {
        scale = pickSubsection(pickSubsection(selected)); //Prevent generating the exact same scale
    }

    if (scale.includes("3rd")) { // Tips
        tipObject.innerHTML = "Tip: Left hand starts on indicated note. Right hand starts 4 semitones above the left hand";
    } else if (scale.includes("6th")) {
        tipObject.innerHTML = "Tip: Right hand starts on indicated note. Left hand starts 8 semitones below right hand";
    } else {
        tipObject.innerHTML = "";
    }

    textObject.innerHTML = scale;
}

function pickSubsection(array) {
    let randomIndex = Math.floor(Math.random() * (array.length) + 0);
    return array[randomIndex];
}