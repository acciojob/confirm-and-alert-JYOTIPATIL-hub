//your JS code here. If required.
// Ask for confirmation
const userConfirmation = confirm("Do you want to proceed?");

// Check user's choice
if (userConfirmation) {
  // User clicked OK
  alert("You clicked OK. Proceeding...");
} else {
  // User clicked Cancel
  alert("You clicked Cancel. Exiting...");
}
