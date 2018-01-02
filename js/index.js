// main state store of the application
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
  ]
}

// rendering to buy table
const toBuyTable = document.getElementById('table-toBuy');

const renderToBuy = (list) => {
  for(let item of list) {
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
    td4.appendChild(button);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    toBuyTable.appendChild(row);
  }
}

renderToBuy(store.toBuyList);

//rendering done table
const doneTable = document.getElementById('table-done');

const renderDone = (list) => {
  for(let item of list) {
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
    td4.appendChild(buttonDelete);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    doneTable.appendChild(row);
  }
}

renderDone(store.doneList);
