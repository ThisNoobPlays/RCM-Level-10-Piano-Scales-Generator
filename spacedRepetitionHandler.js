var spacedRepetition = false;

function onSpacedRepetition() {
    let button = document.getElementById("spaced-repetition-button");
    if (spacedRepetition) {
        spacedRepetition = false;
        button.innerHTML = "Enable Spaced Repetition";
        document.getElementById("good").style.visibility = "hidden";
        document.getElementById("again").style.visibility = "hidden";
        window.box1 = [];
        window.box2 = [];
        window.box3 = [];
        document.getElementById("generate").disabled = false;
    } else {
        spacedRepetition = true;
        button.innerHTML = "Disable Spaced Repetition";
    }
}