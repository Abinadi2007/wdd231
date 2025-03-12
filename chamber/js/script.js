document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Fetch members data
    fetch("members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        });

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            directory.appendChild(div);
        });
    }

    // Toggle view
    gridViewBtn.addEventListener("click", () => directory.classList.add("grid-view"));
    listViewBtn.addEventListener("click", () => directory.classList.remove("grid-view"));

    // Set footer dates
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
