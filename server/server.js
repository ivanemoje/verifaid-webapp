const bodyParser = require('body-parser');
const express = require("express");
const mysql = require ('mysql');
const knex = require ('knex');
const cors = require ('cors');

const app = express();
const port = 3000;

const config = require ('./config.json')

const addentry = require ('./controllers/addentry');
const latest = require ('./controllers/latest');
const all = require ('./controllers/all');

const manifest = require ('./controllers/manifest');
const searchben = require ('./controllers/searchben');
const pdfcreation = require ('./controllers/pdfcreation');

app.use (cors());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const db = knex ({
  client: config.knex.client,
  connection: {
    host: config.knex.host,
    user: config.knex.user,
    password: config.knex.password,
    database : config.knex.database
  }
});

const pool  = mysql.createPool({
  connectionLimit: 100,
  host: config.sqlconfig.host,
  user: config.sqlconfig.user,
  password: config.sqlconfig.password,
  database : config.sqlconfig.database
});

app.listen(port, '0.0.0.0', () => {  console.log("Server listening on port " + port); });

app.get('/', (req, res) => {  res.send('Root\n');  console.log('Root connected to by', req.connection.remoteAddress) })
app.get('/latestentries', (req, res) => { latest.latestEntries ( req, res , pool) })
app.get('/allentries', (req, res) => { all.allEntries ( req, res , db) })

app.post('/addentry', (req, res) => { addentry.addEntry (req, res, db) })

// VerifAID endpoints
app.get('/allmanifests', (req, res) => { manifest.allManifests ( req, res , pool) })
app.post('/searchben', (req, res) => { searchben.searchBen (req, res, pool) })
app.post('/pdfcreation', (req, res) => { req.setTimeout(500000); pdfcreation.pdfCreation (req, res, pool) })




// select a.Registration_Group_ID,  a.beneficiary_name, a.gender, a.FDP_Site, b.account_no 
//   from beneficiary_data a
//  inner join beneficiary_data_bank b on a.Registration_Group_ID = b.Registration_Group_ID
//  where 
//  a.beneficiary_name like '%1150019000009%'
//  or a.Registration_Group_ID like '%1150019000009%'
//  or a.beneficiary_name like '%1150019000009%'
//  or a.gender like '%1150019000009%'
//  or b.account_no like '%1150019000009%'





