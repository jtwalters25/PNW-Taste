if (window.localStorage) {
  var txtEmail = document.getElementById('email');//get form elements
  var txtMyname = document.getElementById('myname');
  var txtFirstname = document.getElementById('firstname');
  var txtLastname = document.getElementById('lastname');
  var txtReserveemail = document.getElementById('reserveemail');
  var txtComments = document.getElementById('comments');


  txtEmail.value = localStorage.getItem('email');
  txtMyname.value = localStorage.getItem('myname');
  txtFirstname.value = localStorage.getItem('firstname');
  txtLastname.value = localStorage.getItem('lastname');
  txtReserveemail.value = localStorage.getItem('reserveemail');
  txtComments.value = localStorage.getItem('comments');

  txtEmail.addEventListener('input', function() { //data saved
    localStorage.setItem('email', txtEmail.value);
  }, false);

  txtMyname.addEventListener('input', function() {
    localStorage.setItem('myname', txtMyname.value);
  }, false);

  txtFirstname.addEventListener('input', function() {
    localStorage.setItem('firstname', txtFirstname.value);
  }, false);

  txtLastname.addEventListener('input', function() {
    localStorage.setItem('lastname', txtLastname.value);
  }, false);

  txtReserveemail.addEventListener('input', function() {
    localStorage.setItem('reserveemail', txtReserveemail.value);
  }, false);

  txtComments.addEventListener('input', function() {
    localStorage.setItem('comments', txtComments.value);
  }, false);
}
