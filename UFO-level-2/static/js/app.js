// from data.js
var tableData = data;

// see activity 14/03/01; use D3 to select the table body; try var if let doesn't work
let tableBody = d3.select("tbody");

//from activity 14/01/07 function, 14/02/01 use forEach
tableData.forEach(function(sighting) {
    console.log(sighting);

    // activity 14/03/01; append one table row for each sighting
    var row = tableBody.append("tr");

    // activity 14/02/07, return values within ojbect
    Object.entries(sighting).forEach(function([key, value]) {

    // Console.log each sighting
    console.log(key, value);
      
      // activity 14/03/01; append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);

    });

  });

  // Prevent the page from refreshing
// d3.event.preventDefault();

// activity 14/03/01 and 04 for event listner; select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tableBody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");

    // console.log input value
    console.log(inputValue);

    // activity 14/02/06 for arrow functions, 14/02/09 for filter; Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue,
                                                    sighting.city === inputValue,
                                                    sighting.state === inputValue,
                                                    sighting.country === inputValue,
                                                    sighting.shape === inputValue);

    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    console.log(selections);

    // Append one table row `tr` for each sighting object
    var row = tableBody.append("tr");

    // Use `Object.entries` to console.log each sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});