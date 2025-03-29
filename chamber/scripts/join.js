document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timestamp").value = new Date().toISOString();
});

function openModal(level) {
    document.getElementById(level + "-modal").style.display = "block";
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
}