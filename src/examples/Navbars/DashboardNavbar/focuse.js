window.addEventListener("keydown", function (e) {
    if (e.keyCode === 119 || (e.ctrlKey && e.keyCode === 75)) {
        if (document.getElementById("Searchid") !== document.activeElement) {
            e.preventDefault();
            //console.log("Search is not in focus");
            document.getElementById("Searchid").focus();
        } else {
            //console.log("Default action of CtrlF");
            return true;
        }
    }
});
