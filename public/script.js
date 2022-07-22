// import results from server.js
// change all require to import
const runReport = require("../server.js")
// import { runReport } from "../server.js";
// declare variables from
console.log("script.js")
// add function to diplay raw data
let report = runReport()

let dataToDisplay = document.getElementById('rawdata')
function displayData(data) {
  console.table(data)
    dataToDisplay.appendChild(
      data.forEach(
        dataToDisplay.innerHTML("<p>" + data[0] + "</p>")
      )
    )
  }

//   add funtion to complie data from server.js
displayData(report.rows)
// export to chart.js