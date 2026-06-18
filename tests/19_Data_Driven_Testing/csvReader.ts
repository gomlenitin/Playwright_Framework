import * as fs from 'fs';
import * as path from "path";

export interface TestDataRow {
    [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {


    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.trim().split('\n');

      // First Line is headers
    let headers = lines[0].split(",");

    // Remaining Lines are data
    let data: TestDataRow[] = [];
    for (let i = 1; i < lines.length; i++) {
        let values = lines[i].split(',');
        let row: TestDataRow = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j].trim()] = values[j]?.trim() || "";
        }
        data.push(row);

    }
    return data;

}