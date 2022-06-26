let dataToDisplay = document.getElementById('rawdata')

let testData = {}
// add universal variables for api calls

//  add api key


//  add clients GA4 to collect info from
    // call google api
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  propertyId = 'ZX1RVYHRMJ';

  // Imports the Google Analytics Data API client library.
  const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a simple report.
  async function runReport() {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });

    console.log('Report result:');
    response.rows.forEach(row => {
      console.log(row.dimensionValues[0], row.metricValues[0]);
    });
    displayData(response)
  }

  runReport();
  // set data on html page
function displayData(data) {
  dataToDisplay.appendChild(
    data.forEach(
      dataToDisplay.innerHTML("<p>" + data[0] + "</p>")
    )
  )
}