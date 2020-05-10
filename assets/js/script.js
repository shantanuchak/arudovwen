var overlay = document.getElementById("overlay");
var imagename = document.getElementById("sitename");
var siteimage = document.getElementById("siteimage");
var image = document.getElementsByClassName("mini_image");
var close =document.getElementById("close");
var main = document.getElementById('main')

Array.from(image).forEach((element) => {
  element.addEventListener("click", (el) => {
    siteimage.src = el.srcElement.src;

   
    imagename.innerHTML =  el.srcElement.alt
    if (el.srcElement.alt == "bizguruh website") {
        imagename.href = 'https://bizguruh.com'
    }
    if (el.srcElement.alt == "Abaytour website") {
        imagename.href = 'https://a-baytours.com'
    }
    if (el.srcElement.alt == "PMS website") {
        imagename.href = 'https://arudovwen.github.io'
    }
    if (el.srcElement.alt == "IMS website") {
        imagename.href = 'https://ims-ministry.herokuapp.com'
    }
    if (el.srcElement.alt == "ilc") {
        imagename.href = 'https://ilc-center.herokuapp.com'
    }
    if (el.srcElement.alt == "Memory match website") {
        imagename.href = 'https://brolik-pms.herokuapp.com'
    }
    overlay.style.display = "flex";
    overlay.style.zIndex = 3;
    main.style.height = '100vh'
    main.style.overflow = 'hidden'
  });
});


close.addEventListener('click',()=>{
    overlay.style.display = "none";  
    overlay.style.zIndex = 0;
    main.style.height = '100%'
    main.style.overflow = 'none'
    document.getElementById('project').scrollIntoView()
   
})