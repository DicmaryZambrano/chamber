const banner = document.getElementById("banner-container");

const close = document.getElementById("close");


const today = new Date().getDay();

if (today === 1 || today === 2 || today === 3) {
  banner.style.display = "block";
}

close.addEventListener('click', () => {
  banner.style.display = "none";
});