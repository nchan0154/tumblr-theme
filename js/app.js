document.getElementsByTagName("body")[0].addEventListener('keypress', function(e) { 
  var key = e.keyCode || e.which;
  var url = false;
  var previous = document.getElementById("previous");
  var next = document.getElementById("next");

  if (e.target.tagName.toUpperCase() === 'INPUT') {
      return; 
  }

  if(key == 106 && previous !== null){
    url = previous.getAttribute('href');
  } else if (key == 107 && next !== null) {
    url = next.getAttribute('href');
  }

  if (url) {
    window.location = url;
  }
});