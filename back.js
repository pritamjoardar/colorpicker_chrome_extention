let hex_code=document.getElementById("hexvalue");

hex_code.addEventListener("input",color);

function color(){

    let new_color=hex_code.value;
    update.innerHTML=new_color;
    
    navigator.clipboard.writeText(new_color);
    

}