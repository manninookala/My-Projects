var color =['black', 'blue', 'red', 'yellow', 'green', 'pink', 'grey', 'orange', 'cyan'];

var btn = document.querySelector('#btn')
var bcolor = document.querySelector('#color')

btn.addEventListener('click', function(){
    var random = getRandomNumber();
    document.body.style.backgroundColor = color[random];
    bcolor.textContent = color[random];
})

var getRandomNumber = () =>{
    return Math.floor(Math.random()*color.length);
}