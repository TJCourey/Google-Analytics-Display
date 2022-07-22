// const express = require('express')
import express from "express";
import path from "path" ;
import {fileURLToPath} from 'url';
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { runReport } from "./server.js";

app.use(express.static('public'))

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "./index.html"))
// );

app.get('/', async (req, res) => {
  // res.sendFile(path.join(__dirname, "./index.html"))
  let report = await runReport()
  res.send(report)
  // console.log(report)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})