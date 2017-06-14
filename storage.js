var usname = document.getElementById('sname');
var pw = document.getElementById('spass');
function store() {
    localStorage.setItem('stname', usname.value);
    localStorage.setItem('stpw', pw.value);
}
function validate() {
 var storedName = localStorage.getItem('stname');
    var storedPw = localStorage.getItem('stpw');

 var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

if(userName.value == storedName && userPw.value == storedPw) {
window.open('welcome.html');
    }else {
		document.getElementById("invalid").innerHTML="username";
        window.stop();
    }
}