document.getElementById("findBar").onclick = function(){
  location.href ="findBar.html";
};

function locationAlert(){
  if(confirm("We need to access your location.\nGrant us permission to access your location?") == true)
  {
      location.href ="reportYes.html"; //change this
  }else{
      location.href ="reportNo.html"; //change this
  }
}

document.getElementById("setting").onclick = function(){
  location.href ="setting.html";
};
