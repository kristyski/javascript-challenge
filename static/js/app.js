// from data.js
var tableData = data;

// from activity 14/03/02
// Use D3 to select the table; may not need this
// let table = d3.select("ufo-table");

// Use D3 to select the table body; try var if let doesn't work
let tableBody = d3.select("tbody");

tableData.forEach(function(sighting) {
    console.log(sighting);

    // Append one table row for each sighting
    var row = tableBody.append("tr");

    // Console.log each sighting
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);

    });

  });

// // Use d3 to create a bootstrap striped table
// // http://getbootstrap.com/docs/3.3/css/#tables-striped
// // table.attr("class", "table table-striped");

// Prevent the page from refreshing
// d3.event.preventDefault();