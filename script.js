// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');
require('dotenv').config()
// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md

const storage = new Storage();

// Makes an authenticated API request.
// async function listBuckets() {
//   try {
//     const [buckets] = await storage.getBuckets();

//     console.log('Buckets:');
//     buckets.forEach(bucket => {
//       console.log(bucket.name);
//     });
//   } catch (err) {
//     console.error('ERROR:', err);
//   }
// }
// listBuckets();

// let dataToDisplay = document.getElementById('rawdata')

// let testData = {}
// add universal variables for api calls

//  add api key
// let GOOGLE_APPLICATION_CREDENTIALS = "AnalyticsDisplay-a36cc069f00c.json"

//  add clients GA4 to collect info from
    // call google api
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  propertyId = '315574323';

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
    // displayData(response)
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