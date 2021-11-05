function closeInfo() {
    var data = document.querySelector('.top-info');
    
    if (data.style.display === 'none') {
        data.style.display = 'block'
    } else {
        data.style.display = 'none'
    }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

// span.onclick = function() {
//   modal.style.display = "none";
// }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
