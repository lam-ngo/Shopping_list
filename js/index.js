// hard-coded datas
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
}


//REDERING TO BUY TABLE
const toBuyTable = document.getElementById('table-toBuy');

const renderToBuy = (item) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let checkBox = document.createElement("input");
    let button = document.createElement("button");

    checkBox.type = "checkbox";
    td1.appendChild(checkBox);

    td2.innerHTML = item.name;

    td3.innerHTML = item.quantity;

    button.innerHTML = 'DELETE';
    button.className = 'delete-button';
    td4.appendChild(button);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    toBuyTable.appendChild(row);
}

for(let item of store.toBuyList) {
  renderToBuy(item);
}

//REDERING DONE TABLE

const doneTable = document.getElementById('table-done');

const renderDone = (item) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let buttonUndo = document.createElement("button");
    let buttonDelete = document.createElement("button");

    buttonUndo.innerHTML = 'UNDO';
    td1.appendChild(buttonUndo);

    td2.innerHTML = item.name;

    td3.innerHTML = item.quantity;

    buttonDelete.innerHTML = 'DELETE';
    buttonDelete.className = 'delete-button';
    td4.appendChild(buttonDelete);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    doneTable.appendChild(row);
}

for(let item of store.doneList) {
  renderDone(item);
}

//ADD EVENTLISTENER FOR DELETE
windowReady = () => {
  let deleteButtonArray = Array.from(document.getElementsByClassName("delete-button"));

  deleteButtonArray.forEach((button) => {
    applyEvent(button);
  });
}

const applyEvent = (element) => {
  element.addEventListener('click', () => {
    const row = element.parentNode.parentNode;
    const td = row.childNodes;
    const item = {name: td[1].innerHTML, quantity: td[2].innerHTML};
    console.log(item);
    row.parentNode.removeChild(row);
  })
}
windowReady();

//ADD NEW ITEM
document.getElementById("add-button").addEventListener('click', (e) => {
  e.preventDefault();
  let newName = document.getElementById("add-name").value;
  let newQuantity = document.getElementById("add-quantity").value;
  store.toBuyList.push({name: newName, quantity: newQuantity});
  renderToBuy({name: newName, quantity: newQuantity});
  document.getElementById("add-name").value = "";
  document.getElementById("add-quantity").value = "";
});

//MOVE FROM TO BUY TO DONE
