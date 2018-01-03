//HARD CODED DATA
const store = {
  toBuyList: [
    {name: 'paper', quantity: 2},
    {name: 'computer', quantity: 1},
    {name: 'water', quantity: 4},
    {name: 'coffee', quantity: 5},
    {name: 'food', quantity: 6},
    {name: 'beer', quantity: 5},
    {name: 'glasses', quantity: 6},
  ],
  doneList: [
    {name: 'pillow', quantity: 2},
    {name: 'candy', quantity: 10},
    {name: 'coke', quantity: 7},
    {name: 'tea', quantity: 5},
  ]
};

//DEFINE EVENT FOR DELETE
const applyDeleteEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    row.parentNode.removeChild(row);
  })
}
//DEFINE EVENT FOR MOVING FROM TO BUY TO DONE
const applyDoneEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    row.parentNode.removeChild(row);
    renderDone(item);
  })
}
//DEFINE EVENT FOR MOVING FROM DONE TO TOBUY
const applyUndoEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    row.parentNode.removeChild(row);
    renderToBuy(item);
  })
}

//RENDERING SINGLE ITEM WITH PREDEFINED FEATURES
const renderItem = (item, parentNodeId, firstButton, firstButtonEvent, textStyle) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let button = document.createElement("button");

    firstButtonEvent(firstButton);
    td1.appendChild(firstButton);
    td2.innerHTML = item.name;
    td2.className = textStyle;
    td3.innerHTML = item.quantity;
    button.innerHTML = 'DELETE';
    applyDeleteEvent(button);
    td4.appendChild(button);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    let parentNode = document.getElementById(parentNodeId);
    parentNode.appendChild(row);
}

//REDERING TO BUY TABLE WITH IDENTICAL FEATURES
const renderToBuy = (item) => {
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  renderItem(item, 'table-toBuy', checkBox, applyDoneEvent, '');
}
for(let item of store.toBuyList) {
  renderToBuy(item);
}

//REDERING DONE TABLE WITH IDENTICAL FEATURES
const renderDone = (item) => {
  let undoButton = document.createElement("button");
  undoButton.innerHTML = 'UNDO';
  renderItem(item, 'table-done', undoButton, applyUndoEvent, 'text-done');
}
for(let item of store.doneList) {
  renderDone(item);
}

//ADD NEW ITEM
document.getElementById("add-new").addEventListener('submit', (e) => {
  e.preventDefault();
  let newName = document.getElementById("add-name").value;
  let newQuantity = document.getElementById("add-quantity").value;
  if(newName !== '' && newQuantity !== '') {
    renderToBuy({name: newName, quantity: newQuantity});
    document.getElementById("add-name").value = "";
    document.getElementById("add-quantity").value = "";
  } else {
    alert('No field can be empty!');
  }
});

//COLLAPSIBLE PANEL
document.getElementById("collapsibleOpen").addEventListener('click', () => {
  tableToggle ("block", "none", "block");
});
document.getElementById("collapsibleClose").addEventListener('click', () => {
  tableToggle ("none", "block", "none");
});
const tableToggle = (table, open, close) => {
  document.getElementById("collapsible").style.display = table;
  document.getElementById("collapsibleOpen").style.display = open;
  document.getElementById("collapsibleClose").style.display = close;
}
