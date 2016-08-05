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
  }, false);


}
