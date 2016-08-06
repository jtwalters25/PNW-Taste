<<<<<<< HEAD
=======

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
=======
>>>>>>> gh-pages
if (window.localStorage) {
  var txtEmail = document.getElementById('email');
  var txtmyName = document.getElementById('myName')
  var txtfirstName = document.getElementById('firstName')
  var txtlastName = document.getElementById('lastName')
  var txtreserveEmail = document.getElementById('reserveEmail')
  var txtcomments = document.getElementById('comments')

  txtEmail.value = localStorage.getItem('email');
  txtmyName.value = localStorage.getItem('myName')
  txtfirstName.value = localStorage.getItem('firstName')
  txtlastName.value = localStorage.getItem('lastName')
  txtreserveEmail.value = localStorage.getItem('reserveEmail')
  txtcomments.value = localStorage.getItem('comments')

  txtEmail.addEventListener('input', function(){
    localStorage.setItem('email', txtEmail.value);
  }, false);

  txtmyName.addEventListener('input', function(){
    localStorage.setItem('myName', txtmyName.value);
  }, false);

  txtfirstName.addEventListener('input', function(){
    localStorage.setItem('firstName', txtfirstName.value);
  }, false);

  txtlastName.addEventListener('input', function(){
    localStorage.setItem('lastName', txtlastName.value);
  }, false);

  txtreserveEmail.addEventListener('input', function(){
    localStorage.setItem('reserveEmail', txtreserveEmail.value);
  }, false);

  txtcomments.addEventListener('input', function(){
    localStorage.setItem('comments', txtcomments.value);
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> gh-pages
  }, false);


}
