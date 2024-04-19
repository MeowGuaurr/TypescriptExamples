import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

// creating an object that satisfies DataReader interface
const cvsFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass something to
// satisfy DataReader
const matchReader = new MatchReader(cvsFileReader)
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport(),
);

summary.buildAndPrintReport(matchReader.matches);
