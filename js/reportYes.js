var table = document.querySelector(".table")
var buttons = document.querySelector(".assaultTypes")

function disappearTable(){
  table.style.display = 'none';
  buttons.style.display = 'block';
}

$(".table").click(function() {
  $(".table").fadeOut();
})
