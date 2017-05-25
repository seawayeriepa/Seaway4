function validateUser()
{
    if(   (document.getElementById("text1").value == "admin" && document.getElementById("text2").value == "admin123") ||
          (document.getElementById("text1").value == "user" && document.getElementById("text2").value == "user123") ||
          (document.getElementById("text1").value == "seaway" && document.getElementById("text2").value == "seaway123") ||
          (document.getElementById("text1").value == "suuser" && document.getElementById("text2").value == "suuser123") )
    {
        alert( "Welcome!" );
        location.href="index.html";
    }
    else
    {
        alert( "Login Failed." );
        location.href="login.html";
    }
}
