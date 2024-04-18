import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// creating an object that satisfies DataReader interface
const cvsFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass something to
// satisfy DataReader
const matchReader = new MatchReader(cvsFileReader)
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`
    Man united has won ${manUnitedWins} games
`)
