function celebrate() {
    // Simple alert for the hype, but you could add confetti!
    const messages = [
        "Hadiya is the GOAT!",
        "20 days down, a lifetime to go! 🥂",
        "Best friend energy: 100% ⚡",
        "Upgrade Successful: Hadiya > Everyone Else"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMsg);
}

// Logic to keep the days counting if you want it live
// Set your friendship start date here
const startDate = new Date("2026-01-13"); // Example: 20 days ago from Feb 2
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('days-count').innerText = diffDays;
