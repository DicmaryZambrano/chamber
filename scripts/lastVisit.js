const now = new Date().getTime();
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const lastVisitDate = new Date(parseInt(lastVisit));
  const timeDiff = now - lastVisitDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    document.getElementById("sidebar-message").textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    document.getElementById("sidebar-message").textContent = "You last visited 1 day ago.";
  } else {
    document.getElementById("sidebar-message").textContent = `You last visited ${daysDiff} days ago.`;
  }
} else {
  document.getElementById("sidebar-message").textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit", now.toString());