function filterFormulas() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const formulaSections = document.querySelectorAll('.formula-section');

    formulaSections.forEach(section => {
        const subject = section.getAttribute('data-subject').toLowerCase();
        const formulas = section.innerText.toLowerCase();

        if (subject.includes(searchInput) || formulas.includes(searchInput)) {
            section.style.display = 'block'; // Show the section
        } else {
            section.style.display = 'none'; // Hide the section
        }
    });
}
