// Imports the Google Cloud client library.
import { Storage } from '@google-cloud/storage';
// require('dotenv').config()
import 'dotenv/config'
// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// const express = require('express')

const storage = new Storage();
let apiReturn = {}


//  add clients GA4 to collect info from
    // call google api
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  let propertyId = '315574323';

  // Imports the Google Analytics Data API client library.
  // const {BetaAnalyticsDataClient} = require('@google-analytics/data');
  import { BetaAnalyticsDataClient } from "@google-analytics/data";
  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a simple report.
 export async function runReport() {
  return await new Promise((resolve,reject)=>{
     analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        // {
        //   name: 'eventName',
        // },
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
        // {
        //   name: 'organicGoogleSearchClicks',
        // },
        // {
        //   name: 'organicGoogleSearchAveragePosition',
        // },


      ],
    }).then(res=>{resolve(res)}).catch(error=>{reject(error)});
    // console.log('Report result:');
    
    // // response.rows.forEach(row => {
    //   //   console.log(row.dimensionValues[0], row.metricValues[0]);
    //   // });

    //   return response;


  })
    
    }

  // runReport();
  
  // set data on html page
// module.exports = runReport();