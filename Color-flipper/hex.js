var hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];

var btn = document.querySelector('#btn');
var color = document.querySelector('#color');

btn.addEventListener('click', function(){
    var hashColor = '#';
    for(var i=0; i<6; i++){
        hashColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hashColor;
    color.textContent = hashColor;
})


var getRandomNumber = () =>{
    return Math.floor(Math.random()*hex.length);
}
