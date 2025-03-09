function toggleSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(section);
    selectedSection.classList.add('active');
}

// Start with Journey section visible
document.getElementById('journey').classList.add('active');

// Automatically play music when page loads
window.onload = function() {
    var audio = document.getElementById('birthdayMusic');
    audio.play(); // Start playing audio automatically
};
