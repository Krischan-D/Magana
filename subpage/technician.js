// JavaScript for toggling requisition form visibility
function toggle() {
    const requisitionForm = document.getElementById("requisitionForm");
    const dimmedBackground = document.getElementById("dimmedBackground");
    requisitionForm.classList.toggle("visible");
    dimmedBackground.classList.toggle("visible");
}

// JavaScript for closing requisition form
document.addEventListener("DOMContentLoaded", function() {
    const closeFormButton = document.getElementById("closeFormButton");
    closeFormButton.addEventListener("click", function() {
        const requisitionForm = document.getElementById("requisitionForm");
        const dimmedBackground = document.getElementById("dimmedBackground");
        requisitionForm.classList.remove("visible");
        dimmedBackground.classList.remove("visible");
    });
});
