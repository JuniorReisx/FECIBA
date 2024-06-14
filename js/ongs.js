function showDetails(ongId) {
    const details = document.getElementById(`details-${ongId}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}