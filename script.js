// import results from server.js
const apiData = require("./server.js")
// declare variables from
console.log("script.js")
// add function to diplay raw data
let dataToDisplay = document.getElementById('rawdata')
function displayData(data) {
    dataToDisplay.appendChild(
      data.forEach(
        dataToDisplay.innerHTML("<p>" + data[0] + "</p>")
      )
    )
  }

//   add funtion to complie data from server.js
displayData(apiData)
// export to chart.js