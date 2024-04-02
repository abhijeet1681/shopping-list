const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear')
const itemFilter = document.querySelector('.filter')

function addItem(e){
  e.preventDefault();
  
  const newItem = itemInput.value 

  if(newItem === ''){
    alert('please add an item')
    return;
  }


const li = document.createElement('li')
li.textContent = `${newItem}`

const button = document.createElement('button')
button.className = 'remove-item btn-link text-red'

const icon = document.createElement('i');
icon.className = 'fa-solid fa-xmark'

button.appendChild(icon)
li.appendChild(button)
itemList.appendChild(li)
itemInput.value = '';
checkUi();
}

function removeItem(e){
  if(e.target.parentElement.classList.contains('remove-item')){
    if(confirm('are you sure')){
    e.target.parentElement.parentElement.remove();

    checkUi();
    }
  }
}


function clearItems(){
 itemList.innerHTML = '';
 checkUi();
}

function filterItems(e){
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
     const itemName = item.firstChild.textContent.toLowerCase();

     if(itemName.indexOf(text) != -1){
     item.style.display = 'flex'
     } else{
     item.style.display = 'none'
    }
  })
}

function checkUi(){
  const items = itemList.querySelectorAll('li')
  if(items.length === 0){
  clearButton.style.display = 'none';
  itemFilter.style.display = 'none'
  }else{
    clearButton.style.display = 'block';
    itemFilter.style.display = 'block'
  }
}

itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearButton.addEventListener('click',clearItems);
itemFilter.addEventListener('input',filterItems);
checkUi();