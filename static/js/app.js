// from data.js
var tableData = data;

// from activity 14/03/02
// Use D3 to select the table
let tableData = d3.select("table");

// let table2 = d3.select(".grades");
console.log(tableData);

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
// table.attr("class", "table table-striped");

// Use D3 to select the table body
let tablebody = d3.select("tablebody");

// Append one table row `tr` to the table body
let row = tablebody.append("tr");

// Append one cell for the datetime
row.append("td").text(newData[0]);

// Append one cell for the city
row.append("td").text(newData[1]);
