
var decrease = document.querySelector('#minus');
var reset = document.querySelector('#reset');
var increase = document.querySelector('#plus');
var number = document.querySelector('#display');


var count = 0;
var value = 0;
decrease.addEventListener('click', function(){
    count = count-1;
    number.innerHTML=count;
    colorCheck(count);
    
})

reset.addEventListener('click', function(){
    count=0;
    number.innerHTML=value;
    colorCheck(value);
})

increase.addEventListener('click', function(){
    count = count+1;
    number.innerHTML=count;
    colorCheck(count);
    
})

var colorCheck = (num) =>{
    if(num>0){
        return number.style.color = 'green';
    }
    else if(num<0){
        return number.style.color = 'red';
    }
    else{
        return number.style.color = 'rgb(34, 34, 34)';
    }
    
}
