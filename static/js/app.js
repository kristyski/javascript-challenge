// from data.js
var tableData = data;

// from activity 14/03/02
// Use D3 to select the table
let table = d3.select("ufo-table");

// Use D3 to select the table body
let tablebody = d3.select("tbody");


// Loop through and call the printName function
// for (var i = 0; i < tableData.length; i++) {
//     printName(tableData[i]);
//   }
  
// Append one table row `tr` to the table body
    let row = tablebody.append("tr");

// // Append one cell for the datetime
    row.append("td").text(tableData[0];

// // Append one cell for the city
    row.append("td").text(tableData[1]);



// // let table2 = d3.select(".grades");
// console.log(tableData);

// // Use d3 to create a bootstrap striped table
// // http://getbootstrap.com/docs/3.3/css/#tables-striped
// // table.attr("class", "table table-striped");


// Prevent the page from refreshing
// d3.event.preventDefault();