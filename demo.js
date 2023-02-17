// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.vackgroundColor ='yellow';
// for(var i = 0;i<li.length;i++)
// {
//     li[i].style.backgroundColor ='#f4f4f4';
// }
// queryselector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello world'

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND'

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'invisible';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

