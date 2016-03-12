function btn1(foto){
   var div = document.getElementById("divo");
   var img;
   switch (foto) {
     case 1:
      img = "gato.jpg";break;
     case 2:
       img = "niño.jpg";break;
     case 3:
        img = "tortuga.jpg";break;
   }
   div.style.cssText = "background:url('"+img+"')no-repeat; background-position: center; width: 700px; height:700px;";
}
