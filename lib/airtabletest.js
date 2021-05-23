var Airtable = require('airtable');
const KEY = process.env.AIRTABLE_KEY;
const BASE = process.env.AIRTABLE_BASE;
var base = new Airtable({ apiKey: KEY }).base(BASE);

const table = base('datatable');


const minifyRecord = record => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

const getMinifiedRecords = records => {
    return records.map(record => minifyRecord(record));
  };

function getPosts() {
    const records = table.select({}).all();
    const minifiedRecords = getMinifiedRecords(records);

    return minifiedRecords;
}

console.log(getPosts())