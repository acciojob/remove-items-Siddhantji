let a = document.getElementById("colorSelect");
let b = document.querySelector("input[type='button']");

b.addEventListener("click", function() {
    const s = a.selectedIndex;
    if (s !== -1) {
        a.options[s].remove();
    } else {
        alert('Please select an option to remove');
    }
});

