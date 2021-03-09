function selectAll() {
    let checkboxes = document.getElementsByTagName("input");
    for (let input of checkboxes) {
        input.checked = true;
    }
}