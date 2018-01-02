//HARD CODED DATA
const store = {
  toBuyList: [
    {name: 'meat', quantity: 2},
    {name: 'fish', quantity: 3},
    {name: 'egg', quantity: 4},
    {name: 'noodle', quantity: 5},
    {name: 'vegetable', quantity: 6},
  ],
  doneList: [
    {name: 'fruit', quantity: 6},
    {name: 'candy', quantity: 10},
    {name: 'beer', quantity: 7},
  ]
};

//DEFINE EVENT FOR DELETE
const applyDeleteEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    console.log(item);
    row.parentNode.removeChild(row);
  })
}
//DEFINE EVENT FOR MOVING FROM TO BUY TO DONE
const applyDoneEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    console.log(item);
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
    console.log(item);
    row.parentNode.removeChild(row);
    renderToBuy(item);
  })
}

//REDERING TO BUY TABLE
const renderItem = (item, parentNode, firstButton, firstButtonEvent) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let button = document.createElement("button");


    firstButtonEvent(firstButton);
    td1.appendChild(firstButton);

    td2.innerHTML = item.name;

    td3.innerHTML = item.quantity;

    button.innerHTML = 'DELETE';
    applyDeleteEvent(button);
    td4.appendChild(button);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    parentNode.appendChild(row);
}

const renderToBuy = (item) => {
  const toBuyTable = document.getElementById('table-toBuy');
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  renderItem(item, toBuyTable, checkBox, applyDoneEvent);
}

for(let item of store.toBuyList) {
  renderToBuy(item);
}

//REDERING DONE TABLE


const renderDoneItem = (item, parentNode, firstButton, firstButtonEvent) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let deleteButton = document.createElement("button");

    firstButtonEvent(firstButton);
    td1.appendChild(firstButton);

    td2.innerHTML = item.name;

    td3.innerHTML = item.quantity;

    deleteButton.innerHTML = 'DELETE';
    deleteButton.className = 'delete-button';
    applyDeleteEvent(deleteButton);
    td4.appendChild(deleteButton);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    parentNode.appendChild(row);
}

const renderDone = (item) => {
  const doneTable = document.getElementById('table-done');
  let undoButton = document.createElement("button");
  undoButton.innerHTML = 'UNDO';
  renderDoneItem(item, doneTable, undoButton, applyUndoEvent);
}

for(let item of store.doneList) {
  renderDone(item);
}

//ADD NEW ITEM
document.getElementById("add-new").addEventListener('submit', (e) => {
  e.preventDefault();
  let newName = document.getElementById("add-name").value;
  let newQuantity = document.getElementById("add-quantity").value;
  renderToBuy({name: newName, quantity: newQuantity});
  document.getElementById("add-name").value = "";
  document.getElementById("add-quantity").value = "";
});
