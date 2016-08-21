var txtFirstname = document.getElementById('firstname');
var txtLastname = document.getElementById('lastname');
var txtReserveemail = document.getElementById('reserveemail');
var timeRestime = document.getElementById('restime');

window.onload = function() {
  if (localStorage.getItem('firstname') != null) {
    txtFirstname.value = localStorage.getItem('firstname');
  }
  if (localStorage.getItem('lastname') != null) {
    txtLastname.value = localStorage.getItem('lastname');
  }
  if (localStorage.getItem('reserveemail') != null) {
    txtReserveemail.value = localStorage.getItem('reserveemail');
  }
  if (localStorage.getItem('restime') != null) {
    timeRestime.value = localStorage.getItem('restime');
  }
}


function clearStorage() {
  localStorage.clear();
  location.reload();
}

//function submitReservation(event) {
document.getElementById("reservations").addEventListener("submit", function(event) {
  event.preventDefault();
  // store field values
  localStorage.setItem('firstname', txtFirstname.value);
  localStorage.setItem('lastname', txtLastname.value);
  localStorage.setItem('reserveemail', txtReserveemail.value);
  localStorage.setItem('restime', timeRestime.value);

  alert("Thank You! We Look Forward To Seeing You!!");
});
