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



//does not work yet
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tableBody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");

    // console.log input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {
    console.log(selections);

    // Append one table row `tr` for each UFO Sighting object
    var row = tableBody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});