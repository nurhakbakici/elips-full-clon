function myFunction() {
  var x = document.getElementById("hidden-searchbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunction1() {
  var x = document.getElementById("third-navbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunction2(){
  var x = document.getElementById("search-icon");
  if(x.style.backgroundColor== "rgb(0, 104, 250)"){
    x.style.backgroundColor="rgb(8, 21, 57)"
  } else{
    x.style.backgroundColor="rgb(0, 104, 250)"
  }
}

function myFunction3() {
  if (document.getElementById("search-button-img").src == "https://www.elips.com/Assets/img/theme/search-icon.png"){
      document.getElementById("search-button-img").src = "https://www.elips.com/Assets/img/theme/x-icon.png";
  } else {
      document.getElementById("search-button-img").src = "https://www.elips.com/Assets/img/theme/search-icon.png";
  }
}

function myFunction4(){
  document.getElementById("search-text").focus();
}