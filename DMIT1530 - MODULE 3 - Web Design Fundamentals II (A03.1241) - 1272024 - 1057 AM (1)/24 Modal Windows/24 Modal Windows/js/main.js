const myModal = document.querySelector('.overlay');

window.addEventListener("load", function (){
    setTimeout(function open(event){
        myModal.style.display = "block";
    } , 2000);
});

document.getElementById("close").addEventListener("click", function (){
    myModal.style.display = "none";
})
