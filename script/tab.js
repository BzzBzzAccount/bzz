let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");

function openFormat(evt, formatName){
    let i
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display="none"
    }
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formatName).style.display = "block";
    evt.currentTarget.className += " active";
}