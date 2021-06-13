
(function(){
const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");

const variants = document.getElementById('form1');
variants.onchange = function(e){
    if(e.target.name == "radio1"){
        changeVariant(e.target.value);
    }
}

function changeVariant(variant) {
    if (variant == 'calc') {
        dateCalcForm.classList.remove('hidden');
        timerForm.classList.add('hidden');
    } else {
        dateCalcForm.classList.add('hidden');
        timerForm.classList.remove('hidden');    
    }
}})();