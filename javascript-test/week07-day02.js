//IN class section

var message = (message) => {
    console.log("======================");
    console.log(`${message}`);
    console.log("======================");
}
message('Operator Precedenace');


let results = 1 + (2 * 3 );
console.log(results);

let results2 = 1 + 2 * 3;
console.log(results2);

message('For / ForEach loops!');

for(let i = 0; i < 7; i+=2){
    console.log(i);
}


message('While Loop!');
let i = 0;
while (i < 15) {

    console.log(i);
    i++;
}

do {
    console.log('hello');
}
while (i < 15) {
    i++;
}






/*

This was completed on my own time.
Looking at this i've already known and figuring out different projects.

*/
message('On my own time!');
const result = 1 + 2 * 3;
const fetch = require('node-fetch');
let myFavoriteClasses = ['Welding', 'Exapmle2,','Treesize','Windows','Apple'];

console.log(result);
console.log(myFavoriteClasses[0]);

myFavoriteClasses.forEach(j => {
    console.log(j);
});

for (let i = 0; i < myFavoriteClasses.length; i++) {
    const element = myFavoriteClasses[i];
    console.log(element);
}
var obj = {};
let csvContent = "data:text/csv;charset=utf-8,";
fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
    .then(resp => {return resp.json();})
    .then(json => convertArrayOfObjectsToCSV(json))
    .catch(err => console.log(err))

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);

function convertArrayOfObjectsToCSV(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {  
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
        data: json
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}

