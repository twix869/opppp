var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));

var minusButton = Array.from(document.getElementsByClassName("fa-minus-circle"));

for(let i=0; i<plusButton.length; i++) {
    plusButton[i].addEventListener('click', function(){
        plusButton[i].nextElementSibling.innerHTML++
    })
}
for(let i=0; i<minusButton.length; i++) {
    minusButton[i].addEventListener('click', function(){
        if (minusButton[i].previousElementSibling.innerHTML!=0){
        minusButton[i].previousElementSibling.innerHTML-- }
    })
}
