  var txtEmail = document.getElementById('email');//get form elements
  var txtMyname = document.getElementById('myname');
  var txtComments = document.getElementById('comments');

  window.onload = function() {
  if (localStorage.getItem('email') != null) {
    txtEmail.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('myname') != null) {
    txtMyname.value = localStorage.getItem('myname');
  }
  if (localStorage.getItem('comments') != null) {
  txtComments.value = localStorage.getItem('comments') ;

  }
}

function clearStorage() {
  localStorage.clear();
  location.reload();
}

//function submitReservation(event) {
document.getElementById("contactform").addEventListener("submit", function(event) {
  event.preventDefault();
  // store field values
  localStorage.setItem('myname', txtMyname.value);
  localStorage.setItem('email', txtEmail.value);
  localStorage.setItem('comments', txtComments.value);

  alert("Thank You For Your Feedback!!");
});
