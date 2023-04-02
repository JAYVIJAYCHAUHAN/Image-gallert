
 var fullImgBox = document.getElementById("fullImgBox");;
  var fullImg=document.getElementById("fullImg");
     function openFullimg(pic){
        fullImgBox.style.display="flex";
fullImg.src = pic;
     }

      function closeFullImg(){
        fullImgBox.style.display = "none";
      }