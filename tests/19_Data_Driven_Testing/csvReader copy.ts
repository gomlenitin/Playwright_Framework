import * as fs from 'fs';
import * as path from "path";

//I have created an ‘Interface’ named ‘TestDataRow’. 
// This interface have ‘key’ which is a type as a ‘String’ and ‘values’ are also ’strings’. 
export interface TestDataRow{
    [key:string] : string;
}

//Created a reusable function named 'readCSV' with one input parameter called 'filePath'  
// that accepts a CSV file path as a string  and returns an array of TestDataRow objects 
export function readCSV(filePath: string): TestDataRow[] {

    const fullPath = path.join(__dirname, filePath);    // We Declare  a constant variable  named  ‘fullPath’ that stores the absolute path of the CSV file. using
    const content = fs.readFileSync(fullPath, 'utf-8'); // We Declare  a constant variable  named  ‘content’ that read the content of the CSV file. using ‘fs.readFileSync’ method to read the file synchronously and specify the encoding as 'utf-8'.
    const lines = content.trim().split('\n'); // We Declare  a constant variable  named  ‘lines’ that stores the content of the CSV file as an array of strings. using ‘trim()’ method to remove any leading or trailing whitespace and then split the content into an array of lines using the newline character '\n' as the delimiter.

    // first line is header 
    //declare variable as ‘header’ that fetch ‘header’ from ‘lines’ constant variable i.e ZEROindex
    let headers = lines[0].split(',');

    // Now creates an empty ‘array’ named with as variable ‘data’.
    // that will store all ‘CSV rows’ as objects of type ’TestDataRow’.
    let data : TestDataRow[]  = [];

    // Create for loop that reads row and it starts from 1 as on 0th index there is header columns
    for (let i = 1; i <= lines.length; i++){

        // declare variable as ‘values’ that fetch ‘values’ from ‘lines’ constant variable i.e current index
        //Now each ‘row’ we need to split on basis of comma.
        let values = lines[i].split(',');

        // Now we create an empty object named as ‘row’ of type ‘TestDataRow’ to store each row data as key-value pair
        let row :TestDataRow = {};
        
        // Now we create another for loop that reads each column header of current row
        for (let j = 0; j < headers.length; j++){
            // Create key-value pairs dynamically 
            row[headers[j].trim()] = values[j]?.trim() || "";
        }
        data.push(row);
    }
    return data;

}
