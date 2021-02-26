function changecolor(){
  var a = document.getElementsByClassName('nav-item');
  for (let i = 0; i < a.length; i++) {
    a[i].onclick = function(){
      for (let j = 0; j < a.length; j++) {
        if (a[j].classList.contains("active")) {
          a[j].classList.remove("active")
        }
      }
      a[i].classList.add("active")
    }
   
 }
}


function dailbox(){
  var dailbox = document.getElementById('dailogbox');
  dailbox.classList.add("show")
}

function closebtn(){
  var dailbox = document.getElementById('dailogbox');
  dailbox.classList.remove("show")
}


function showmsg(){
  var showmsg = document.getElementById('right-box');
  if(showmsg.classList.contains('show')){
    showmsg.classList.remove('show');
    showmsg.classList.add('hide')
  }
  else{
    showmsg.classList.remove('hide');
    showmsg.classList.add('show')
  }
}