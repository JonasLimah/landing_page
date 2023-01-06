const menumobile = document.querySelector(".square");
menumobile.addEventListener("click", menuDown);

function menuDown(){
    let menumob =  document.querySelector(".open")
    if (menumob.classList.contains("close")){
        menumob.classList.remove("close")
       
    }else{
        
        menumob.classList.add("close")
        
        
    }
}   