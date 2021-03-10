var spacedRepetition = false;

function onSpacedRepetition() {
    let button = document.getElementById("spaced-repetition-button");
    if (spacedRepetition) {
        spacedRepetition = false;
        button.innerHTML = "Enable Spaced Repetition";
    } else {
        spacedRepetition = true;
        button.innerHTML = "Disable Spaced Repetition";
    }
}