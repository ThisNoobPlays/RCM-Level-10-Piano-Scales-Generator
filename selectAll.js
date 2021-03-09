function selectAll() {
    let checkboxes = document.getElementsByTagName("input");
    for (input of checkboxes) {
        input.checked = true;
    }
}