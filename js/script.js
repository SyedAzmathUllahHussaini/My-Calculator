$(function(){
    $(".blink").typed({
      strings: ["HELLO ", "WELCOME TO MY CALCULATOR"],
      typeSpeed: 0.5
    });
});
let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        document.getElementById("name").focus();
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "c"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})
function play() {   
    var beepsound = new Audio('./sound.mp3');   
    beepsound.play();   
} 

// function back(){
//     var 

// }
// function back() {
//     var value = document.getElementById("back").value;
//     document.querySelector('input').value = value.substr(0, value.length - 1);
// }

// Array.from(buttons).forEach((button) => {
//     button.addEventlistener('click', (e)=> {
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//     })
// })