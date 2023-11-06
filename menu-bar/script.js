let show=false;
function pop(){
    let ref=document.getElementById("list");
    if(show==false){
    ref.style.display="block";
    show="true";
    }
    else
    {ref.style.display="none";
    show=false;
    }
}
