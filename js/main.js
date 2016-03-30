currentSlide = 1;
maxSlide = 4;
function justDoIt(id){
    document.getElementById("im"+currentSlide).style.display = "none";
    document.getElementById("b"+currentSlide).className = "";

    document.getElementById("im"+id).style.display = "block";
    document.getElementById("b"+id).className = "aktif";
    currentSlide = id;
}

function changeSlide(what){
    if(what == "prev"){
        if(currentSlide == '1'){
            justDoIt(maxSlide);
        }else{
            justDoIt(currentSlide - 1);
        }
    }else if(what == "next"){
        if(currentSlide == maxSlide){
            justDoIt(1);
        }else{
            justDoIt(currentSlide + 1);
        }
    }else{
        justDoIt(what);
    }

}
