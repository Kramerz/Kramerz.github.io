window.onload = () => {
    function enableStylesheet(node) {
        node.rel = 'stylesheet';
    }
    function disableStylesheet(node) {
        node.rel = 'alternate stylesheet';
    }
    const appearanceButton = document.getElementById('appearanceAction');
    const defaults = document.getElementById('default');
    const basic = document.getElementById('basic');
    appearanceButton.onclick = () => {
        disableStylesheet(defaults);
        enableStylesheet(basic);
    }
    const appearanceButton2 = document.getElementById('appearanceAction2');

    appearanceButton2.onclick = () => {
        disableStylesheet(basic);

        enableStylesheet(defaults);
    }
}