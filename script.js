let colorSelect = document.getElementById("colorSelection"); // Assuming ID is "colorSelection"
let removeButton = document.querySelector("input[type='button']");

removeButton.addEventListener("click", function() {
  const selectedIndex = colorSelect.selectedIndex;

  // Check if a valid option is selected (not -1 for no selection)
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  } else {
    alert("Please select an option to remove!");
  }
});
