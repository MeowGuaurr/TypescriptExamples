"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
// creating an object that satisfies DataReader interface
const cvsFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create an instance of MatchReader and pass something to
// satisfy DataReader
const matchReader = new MatchReader_1.MatchReader(cvsFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
