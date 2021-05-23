var Airtable = require('airtable');
// const table = new Airtable({apiKey: APIKEY}).base('appXZRW3UphpXJY9l');
const KEY = process.env.AIRTABLE_KEY;
const BASE = process.env.AIRTABLE_BASE;

var base = new Airtable({apiKey: KEY}).base('appuvfB7PfQfd76kg');


const table = base('datatable');


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function getPosts() {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

export async function getPostData(id) {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  // console.log(minifiedRecords);
}