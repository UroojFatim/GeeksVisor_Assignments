document.getElementById('submit-btn').addEventListener('click', function() {
    var name = document.getElementById('name-input').value;
    var age = document.getElementById('age-input').value;
  
    if (name && age) {
      var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      cell1.innerHTML = name;
      cell2.innerHTML = age;
      document.getElementById('name-input').value = '';
      document.getElementById('age-input').value = '';
    } else {
      alert('Please enter both name and age.');
    }
  });
  