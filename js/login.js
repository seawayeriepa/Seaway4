
var items = ['admin','admin123',
              'user','user123',
              'guest','guest123'];
//Fix the above array
$('#btn_login').click(function(){
  var usernameAttempt = $('#usernameField').val();
  var passwordAttempt = $('#passwordField').val();
  var usernameExists = false;
  var usernameIndex;
  var passwordMatchesUsername = false;
  var failedAttempt = false;
  for(var i = 0; i < items.length; i++)
  {
    if(items[i] == usernameAttempt){
          usernameExists = true;
          usernameIndex = i;
    }
    else{
      failedAttempt = true;
    }
  }

  if(usernameExists == true)
  {
      if(items[usernameIndex + 1] == passwordAttempt){
            passwordMatchesUsername = true;
            alert("welcome!");
      }
  }


});
