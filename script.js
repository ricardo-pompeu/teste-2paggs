document.getElementById('itemForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const itemQuantity = document.getElementById('itemQuantity').value;
  const itemPrice = document.getElementById('itemPrice').value;
  const itemPriority = document.getElementById('itemPriority').value;
  const itemValidity = document.getElementById('itemValidity').value;

  let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
  
  const newItem = {
    itemName,
    itemQuantity,
    itemPrice,
    itemPriority,
    itemValidity
  };

  inventory.push(newItem);
  localStorage.setItem('inventory', JSON.stringify(inventory));

  // Limpar formulário
  document.getElementById('itemForm').reset();
});

window.onload = function() {
  const tableBody = document.querySelector('#inventoryTable tbody');
  const inventory = JSON.parse(localStorage.getItem('inventory')) || [];

  inventory.forEach((item, index) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = index + 1;
    newRow.insertCell(1).textContent = item.itemName;
    newRow.insertCell(2).textContent = item.itemQuantity;
    newRow.insertCell(3).textContent = item.itemPrice;
    newRow.insertCell(4).textContent = item.itemPriority;
    newRow.insertCell(5).textContent = item.itemValidity;
  });
};

