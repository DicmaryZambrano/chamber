const currentDate = new Date();

let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const calendar = document.querySelector(".calendar");
const currentMonthElement = document.getElementById("current-month");
const datesElement = document.querySelector(".dates");

document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  showCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  showCalendar();
});

function showCalendar() {
  currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`;
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  let dates = "";
  
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (i === 1) {
      for (let j = 0; j < firstDayOfMonth; j++) {
        dates += `<div class="date"></div>`;
      }
    }
    
    dates += `<div class="date ${i === currentDate.getDate() && currentMonth === currentDate.getMonth() ? "current" : ""}">${i}</div>`;
  }
  
  datesElement.innerHTML = dates;
}

showCalendar();