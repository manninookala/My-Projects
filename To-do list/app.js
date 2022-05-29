var submit = document.querySelector("#btn");


submit.addEventListener('click', addItem = () =>{
    var itemList = [];
    var empty = '   ';
    var item = document.querySelector("#input").value;
    itemList.push(item);
    displayItem(itemList);
    item.textContent = empty;

})

var displayItem = (itemList) =>{
    
    
    for(var i=0; i<itemList.length; i++){
        return console.log(itemList[i]);
    }
}
