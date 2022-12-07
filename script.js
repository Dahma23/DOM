let i = 0;
let j = 0;

function total() {
    var node = document.getElementById('total1')
    var node2 = document.getElementById('total2')
    //te5ou total 1
    //trodou noumrou
    //te5ou total2
    //trodou noumrou
    textContent = node.textContent;
    textContent = textContent.replace('$', '');
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    total1 = Number(textContent)
    total2 = Number(textContent2);
    var total = total1 + total2;
    document.getElementById('total').innerHTML = (total) + "$";
    //afficher total
}
function add1() {
    var node = document.getElementById('count1');
    var node2 = document.getElementById('price1');
    textContent = node.textContent;
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    number = Number(textContent) + 1;
    price = Number(textContent2);
    document.getElementById('count1').innerHTML = number;
    document.getElementById('total1').innerHTML = (number * price) + "$";
    total()
}
function remove1() {
    var node = document.getElementById('count1');
    var node2 = document.getElementById('price1');
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    textContent = node.textContent;
    price = Number(textContent2);
    number = Number(textContent) - 1;
    if (textContent > 1) {
        document.getElementById('count1').innerHTML = number;
        document.getElementById('total1').innerHTML = (number * price) + "$";
        total()
    }
}
function add2() {
    var node = document.getElementById('count2');
    var node2 = document.getElementById('price2');
    textContent = node.textContent;
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    number = Number(textContent) + 1;
    price = Number(textContent2);
    document.getElementById('count2').innerHTML = number;
    document.getElementById('total2').innerHTML = (number * price) + "$";
    total()
}
function remove2() {
    var node = document.getElementById('count2');
    var node2 = document.getElementById('price2');
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    textContent = node.textContent;
    price = Number(textContent2);
    number = Number(textContent) - 1;
    if (textContent > 1) {
        document.getElementById('count2').innerHTML = number;
        document.getElementById('total2').innerHTML = (number * price) + "$";
        total()
    }
}
function removeChild1() {
    var parentElem = document.getElementById('parent');
    var childElem = document.getElementById('child1');
    parentElem.removeChild(childElem);
    var node = document.getElementById('items')
    textContent = node.textContent;
    textContent = textContent.replace('items', '');
    number = Number(textContent) - 1;
    var node2 = document.getElementById('total2')
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    total2 = Number(textContent2);
    document.getElementById('total').innerHTML = (total2) + "$";
    document.getElementById('items').innerHTML = (number) + " items";
}
function removeChild2() {
    var parentElem = document.getElementById('parent');
    var childElem = document.getElementById('child2');
    parentElem.removeChild(childElem);
    var node = document.getElementById('items')
    textContent = node.textContent;
    textContent = textContent.replace('items', '');
    number = Number(textContent) - 1;
    var node2 = document.getElementById('total1')
    textContent2 = node2.textContent;
    textContent2 = textContent2.replace('$', '');
    total2 = Number(textContent2);
    document.getElementById('total').innerHTML = (total2) + "$";
    document.getElementById('items').innerHTML = (number) + " items";
}
function heart() {
    var elem = document.getElementById('heart');
    if (i == 0) {
        elem.style.color = 'red';
        i++;
    }
    else {
        elem.style.color = 'black';
        i--;
    }
}
function heart2() {
    var elem = document.getElementById('heart2');
    if (j == 0) {
        elem.style.color = 'red';
        j++;
    }
    else {
        elem.style.color = 'black';
        j--;
    }
}
