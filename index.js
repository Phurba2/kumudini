document.addEventListener('DOMContentLoaded', () => {
    const updatesList = document.getElementById('updates-list');

    // Function to load the latest updates
    const loadLatestUpdates = () => {
        let updates = JSON.parse(localStorage.getItem("updates")) || [];

        // Fallback data if fewer than 2 updates exist
        const defaultUpdates = [
            { title: "Update 1", date: "2025-03-01", picture: "https://via.placeholder.com/150", content: "Full content for Update 1...", target: "update-1" },
            { title: "Update 2", date: "2025-03-02", picture: "https://via.placeholder.com/150", content: "Full content for Update 2...", target: "update-2" },
            { title: "Update 3", date: "2025-03-03", picture: "https://via.placeholder.com/150", content: "Full content for Update 3...", target: "update-3" },
            { title: "Update 4", date: "2025-03-04", picture: "https://via.placeholder.com/150", content: "Full content for Update 4...", target: "update-4" },
            { title: "Update 5", date: "2025-03-05", picture: "https://via.placeholder.com/150", content: "Full content for Update 5...", target: "update-5" },
            { title: "Update 6", date: "2025-03-06", picture: "https://via.placeholder.com/150", content: "Full content for Update 6...", target: "update-6" },
            { title: "Update 7", date: "2025-03-07", picture: "https://via.placeholder.com/150", content: "Full content for Update 7...", target: "update-7" },
            { title: "Update 8", date: "2025-03-08", picture: "https://via.placeholder.com/150", content: "Full content for Update 8...", target: "update-8" },
            { title: "Update 9", date: "2025-03-09", picture: "https://via.placeholder.com/150", content: "Full content for Update 9...", target: "update-9" },
            { title: "Update 10", date: "2025-03-10", picture: "https://via.placeholder.com/150", content: "Full content for Update 10...", target: "update-10" }
        ];

        // Use localStorage updates if available, otherwise fallback to default
        if (updates.length < 2) {
            updates = [...updates, ...defaultUpdates.slice(updates.length, 2)];
        } else {
            updates = updates.slice(0, 2); // Take the latest 2 updates
        }

        // Sort updates by date (descending) to ensure the latest are shown
        updates.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Clear existing content
        updatesList.innerHTML = "";

        // Display the latest 2 updates
        updates.forEach(update => {
            const updateItem = document.createElement('div');
            updateItem.className = 'update-item';
            updateItem.innerHTML = `
                <h3>${update.title}</h3>
                <p class="date">${update.date}</p>
                <p class="preview">${update.content.substring(0, 50)}...</p>
            `;
            updatesList.appendChild(updateItem);
        });
    };

    // Load updates on page load
    loadLatestUpdates();
});