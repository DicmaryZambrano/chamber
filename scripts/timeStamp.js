const currentDate = new Date();
const currentDateTimeElement = document.getElementById("timestamp");
currentDateTimeElement.value = currentDate.toISOString();