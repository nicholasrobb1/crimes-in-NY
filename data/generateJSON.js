const fs = require('fs');

let crimeDict = {"County":0,"Agency":1,"year":2,"Months Reported":3,"indexTotal":4,"violentTotal":5,"murder":6,"rape":7,"robbery":8,"aggravatedAssault":9,"propertyTotal":10,"burglary":11,"larceny":12,"motorVehicleTheft": 13,"Region":14};

let precincts = {};

let crimeCSV = fs.readFileSync('Crimes.csv', 'utf8');

let prec = crimeCSV.split("\n");

// let line = prec.split(",");

let counties = [];
let countyTotal = {};


for(let i = 1; i < prec.length; i++){
  let line = prec[i].split(',')
  if(counties.indexOf(line[0]) == -1){
    counties.push(line[0]);
  }
}

for(let i = 0; i < counties.length-1; i++){
    countyTotal[counties[i]] = {
    "2017":{
      // "Agency":"",
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "2018":{
      // "Agency":"",
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "2019":{
      // "Agency":"",
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "2020":{
      // "Agency":"",
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "2021":{
      // "Agency":"",
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "avg":{
      "indexTotal":0,
      "violentTotal":0,
      "murder":0,
      "rape":0,
      "robbery":0,
      "aggravatedAssault":0,
      "propertyTotal":0,
      "burglary":0,
      "larceny":0,
      "motorVehicleTheft": 0
    },
    "indexTotal":0,
    "violentTotal":0,
    "propertyTotal":0
  }
}


for(let i = 1; i < prec.length-1; i++){
  let county = prec[i].split(',');


  if(county[1] == "County Total"){
    let year = countyTotal[county[0]][county[2]];

  // year.Agency += county[crimeDict["Agency"]];
    year.indexTotal = parseInt(year.indexTotal)+ parseInt(county[crimeDict["indexTotal"]]);
    year.violentTotal = parseInt(year.violentTotal)+ parseInt(county[crimeDict["violentTotal"]]);
    year.murder = parseInt(year.murder)+ parseInt(county[crimeDict["murder"]]);
    year.rape = parseInt(year.rape)+ parseInt(county[crimeDict["rape"]]);
    year.robbery = parseInt(year.robbery)+ parseInt(county[crimeDict["robbery"]]);
    year.aggravatedAssault = parseInt(year.aggravatedAssault)+ parseInt(county[crimeDict["aggravatedAssault"]]);
    year.propertyTotal = parseInt(year.propertyTotal)+ parseInt(county[crimeDict["propertyTotal"]]);
    year.burglary = parseInt(year.burglary)+ parseInt(county[crimeDict["burglary"]]);
    year.larceny = parseInt(year.larceny)+ parseInt(county[crimeDict["larceny"]]);
    year.motorVehicleTheft = parseInt(year.motorVehicleTheft)+ parseInt(county[crimeDict["motorVehicleTheft"]]);

    countyTotal[county[0]][county[2]] = year;
  }
}

for(county in countyTotal){
  let iT = 0;
  let vT = 0;
  let pT = 0;
  let genAvg ={
    "indexTotal":0,
    "violentTotal":0,
    "murder":0,
    "rape":0,
    "robbery":0,
    "aggravatedAssault":0,
    "propertyTotal":0,
    "burglary":0,
    "larceny":0,
    "motorVehicleTheft": 0
  }
  for(let i = 2017; i < 2022; i++){
    iT += countyTotal[county][i.toString()].indexTotal
    vT += countyTotal[county][i.toString()].violentTotal
    pT += countyTotal[county][i.toString()].propertyTotal
    genAvg.indexTotal = parseInt(genAvg.indexTotal)+ parseInt(countyTotal[county][i.toString()]["indexTotal"]);
    genAvg.violentTotal = parseInt(genAvg.violentTotal)+ parseInt(countyTotal[county][i.toString()]["violentTotal"]);
    genAvg.murder = parseInt(genAvg.murder)+ parseInt(countyTotal[county][i.toString()]["murder"]);
    genAvg.rape = parseInt(genAvg.rape)+ parseInt(countyTotal[county][i.toString()]["rape"]);
    genAvg.robbery = parseInt(genAvg.robbery)+ parseInt(countyTotal[county][i.toString()]["robbery"]);
    genAvg.aggravatedAssault = parseInt(genAvg.aggravatedAssault)+ parseInt(countyTotal[county][i.toString()]["aggravatedAssault"]);
    genAvg.propertyTotal = parseInt(genAvg.propertyTotal)+ parseInt(countyTotal[county][i.toString()]["propertyTotal"]);
    genAvg.burglary = parseInt(genAvg.burglary)+ parseInt(countyTotal[county][i.toString()]["burglary"]);
    genAvg.larceny = parseInt(genAvg.larceny)+ parseInt(countyTotal[county][i.toString()]["larceny"]);
    genAvg.motorVehicleTheft = parseInt(genAvg.motorVehicleTheft)+ parseInt(countyTotal[county][i.toString()]["motorVehicleTheft"]);
  }
  genAvg.indexTotal = parseInt(genAvg.indexTotal/5);
  genAvg.violentTotal = parseInt(genAvg.violentTotal/5);
  genAvg.murder = parseInt(genAvg.murder/5);
  genAvg.rape = parseInt(genAvg.rape/5);
  genAvg.robbery = parseInt(genAvg.robbery/5);
  genAvg.aggravatedAssault = parseInt(genAvg.aggravatedAssault/5);
  genAvg.propertyTotal = parseInt(genAvg.propertyTotal/5);
  genAvg.burglary = parseInt(genAvg.burglary/5);
  genAvg.larceny = parseInt(genAvg.larceny/5);
  genAvg.motorVehicleTheft = parseInt(genAvg.motorVehicleTheft/5);

  countyTotal[county].indexTotal = iT;
  countyTotal[county].violentTotal = vT;
  countyTotal[county].propertyTotal = pT;
  countyTotal[county].avg = genAvg;
}



// console.log(countyTotal);
// console.log(JSON.stringify(countyTotal))


fs.writeFileSync('countyCrime.json', JSON.stringify(countyTotal), 'utf8');
