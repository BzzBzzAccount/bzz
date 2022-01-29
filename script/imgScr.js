let modal = document.getElementById("myModal");
let modalTwo = document.getElementById("myModal2");
let img = document.getElementById("myImg");
let imgTwo = document.getElementById("myImg2");
let modalImg = document.getElementById("img01");
let modalImgTwo = document.getElementById("img02");

img.onclick = function(){
    modal.style.display = "block"
    modalImg.src = this.src
};
imgTwo.onclick = function(){
    modalTwo.style.display = "block"
    modalImgTwo.src = this.src
};

let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
};
let spanTwo = document.getElementsByClassName("close2")[0];
spanTwo.onclick = function() { 
    modalTwo.style.display = "none";
};
