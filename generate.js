let major4octave = ["G flat Major Four-Octave Scale", "G major Four-Octave Scale", "A flat major Four-Octave Scale", "A major Four-Octave Scale", "B flat major Four-Octave Scale", "B major Four-Octave Scale"];
let harmonicMinor4octave = ["G flat harmonic minor Four-Octave Scale", "G harmonic minor Four-Octave Scale", "A flat harmonic minor Four-Octave Scale", "A harmonic minor Four-Octave Scale", "B flat harmonic minor Four-Octave Scale", "B harmonic minor Four-Octave Scale"];
let melodicMinor4octave = ["G flat melodic minor Four-Octave Scale", "G melodic minor Four-Octave Scale", "A flat melodic minor Four-Octave Scale", "A melodic minor Four-Octave Scale", "B flat melodic minor Four-Octave Scale", "B melodic minor Four-Octave Scale"];
let sep3 = ["Separated by 3rd G flat major scale", "Separated by 3rd G major scale", "Separated by 3rd A flat major scale"];
let sep6 = ["Separated by 6th A major scale", "Separated by 6th B flat major scale", "Separated by 6th B major scale"];
let inOctavesMajor = ["B flat major in octaves", "B major in octaves"];
let inOctavesMinor = ["B flat minor in octaves", "B minor in octaves"];
let chromaticInOctaves = ["F sharp chromatic in octaves", "G chromatic in octaves", "G sharp chromatic in octaves", "A chromatic in octaves", "A sharp chromatic in octaves", "B chromatic in octaves"]
let fourNoteChordsMajor = ["G flat Major four-note chords root position and inversions", "G major four-note chords root position and inversions", "A flat major four-note chords root position and inversions", "A major four-note chords root position and inversions", "B flat major four-note chords root position and inversions", "B major four-note chords root position and inversions"];
let fourNoteChordsMinor = ["G flat Minor four-note chords root position and inversions", "G Minor four-note chords root position and inversions", "A flat Minor four-note chords root position and inversions", "A Minor four-note chords root position and inversions", "B flat Minor four-note chords root position and inversions", "B Minor four-note chords root position and inversions"];
let dominant7th = ["G flat Major dominant 7th chords root position and inversions", "G Major dominant 7th chords root position and inversions", "A flat Major dominant 7th chords root position and inversions", "A Major dominant 7th chords root position and inversions", "B flat Major dominant 7th chords root position and inversions", "B Major dominant 7th chords root position and inversions"];
let dim7th = ["G flat Minor diminished 7th chords root position and inversions", "G Minor diminished 7th chords root position and inversions", "A flat Minor diminished 7th chords root position and inversions", "A Minor diminished 7th chords root position and inversions", "B flat Minor diminished 7th chords root position and inversions", "B Minor diminished 7th chords root position and inversions"];
let majorTonicArp = ["G flat Major tonic arpeggios root position and inversions", "G major tonic arpeggios root position and inversions", "A flat major tonic arpeggios root position and inversions", "A major tonic arpeggios root position and inversions", "B flat major tonic arpeggios root position and inversions", "B major tonic arpeggios root position and inversions"];
let minorTonicArp = ["G flat Minor tonic arpeggios root position and inversions", "G Minor tonic arpeggios root position and inversions", "A flat Minor tonic arpeggios root position and inversions", "A Minor tonic arpeggios root position and inversions", "B flat Minor tonic arpeggios root position and inversions", "B Minor tonic arpeggios root position and inversions"];
let dom7Arp = ["G flat Major dominant 7th arpeggios root position and inversions", "G Major dominant 7th arpeggios root position and inversions", "A flat Major dominant 7th arpeggios root position and inversions", "A Major dominant 7th arpeggios root position and inversions", "B flat Major dominant 7th arpeggios root position and inversions", "B Major dominant 7th arpeggios root position and inversions"];
let dim7Arp = ["G flat Major diminished 7th arpeggios root position and inversions", "G Major diminished 7th arpeggios root position and inversions", "A flat Major diminished 7th arpeggios root position and inversions", "A Major diminished 7th arpeggios root position and inversions", "B flat Major diminished 7th arpeggios root position and inversions", "B Major diminished 7th arpeggios root position and inversions"];
let all = [major4octave, harmonicMinor4octave, melodicMinor4octave, sep3, sep6, inOctavesMajor, inOctavesMinor, chromaticInOctaves, fourNoteChordsMinor, fourNoteChordsMajor, dominant7th, dim7th, majorTonicArp, minorTonicArp, dim7Arp, dom7Arp];

function onGenerate() {
    let scale = pickSubsection(pickSubsection(all));
    document.getElementById("scale-text").innerHTML = scale;
}

function pickSubsection(array) {
    let randomIndex = Math.floor(Math.random() * (array.length) + 0);
    return array[randomIndex];
}