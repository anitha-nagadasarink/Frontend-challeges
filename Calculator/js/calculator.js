// Variable declarations
let formCalc = document.querySelector('.calc');
let result = document.querySelector('.result');
let toggleBtn = document.querySelectorAll('.color-switch');
let htmlBody = document.querySelector('body');
let btnForm = document.querySelector('.calc-btn-form');
let allbtn = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('.btn-reset');
let btnValue;

// let  btnSigns = document.querySelectorAll('.btn-sign');

function colorTheme(toggleBtn){
toggleBtn.forEach(colorBtn => {
  // console.log(colorBtn.value);
  colorBtn.addEventListener('click', function(ele){
      // ele.target.parentNode.classList[ ele.target.checked ? 'add': 'remove'] ('selected');
      if(ele.target.classList.contains('color-switch-blue')){
        htmlBody.classList.add('theme-blue');

       htmlBody.classList.remove('theme-white');
       htmlBody.classList.remove('theme-purple');
      } else if(ele.target.classList.contains('color-switch-white')) {
        htmlBody.classList.add('theme-white');

        htmlBody.classList.remove('theme-blue');
        htmlBody.classList.remove('theme-purple');
      } else if(ele.target.classList.contains('color-switch-purple')){
        htmlBody.classList.add('theme-purple');

          htmlBody.classList.remove('theme-blue');
          htmlBody.classList.remove('theme-white');
      }
  });
});
}
//Color Switch function call
colorTheme(toggleBtn);


function del(){ 
var numberValue=document.getElementById('screen').value;
document.getElementById('screen').value= numberValue.substr(0, numberValue.length-1); 
}