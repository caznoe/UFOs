// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data in table
    tbody.html("");

    // Loop through each object in the data and append a row and cells for each value.
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        
        // Loop through each field and add each value to a table cell.
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}