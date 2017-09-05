$(document).ready(function(){
  $('#sidebar-btn').click(function(){
    $('#sidebar').toggleClass('visible');
  });
});

document.getElementById('verifyButton').onclick = function () {
  document.getElementById('sentence').innerHTML += "See Spot run...Thank you!";
}
