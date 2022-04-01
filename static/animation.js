
  


let menuOpen = false;

menubtn = document.getElementById("menu");
sidebar_element = document.getElementById("sidebar")


menubtn.addEventListener('click', () => {
    if (!menuOpen) {
        menubtn.classList.add('open')
        menubtn.style.marginLeft = "250px";
        sidebar_element.style.width = "250px";
        menuOpen = true;
        

    } else {
        menubtn.classList.remove('open');
        sidebar_element.style.width = "0";
        menubtn.style.marginLeft = "0";
        menuOpen = false;
        
    }
});
  

  