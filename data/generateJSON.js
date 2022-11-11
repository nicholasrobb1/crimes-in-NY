const fs = require('fs');

let crimeDict = {"County":0,"Agency":1,"year":2,"Months Reported":3,"indexTotal":4,"violentTotal":5,"murder":6,"rape":7,"robbery":8,"aggravatedAssault":9,"propertyTotal":10,"burglary":11,"larceny":12,"motorVehicleTheft": 13,"Region":14};

let precincts = {};

let crimeCSV = fs.readFileSync('Crimes.csv', 'utf8');

let prec = crimeCSV.split("\n");

// let line = prec.split(",");

let counties = [];
let countyTotal = {};


for(let i = 0; i < prec.length; i++){
  let line = prec[i].split(',')
  if(counties.indexOf(line[0]) == -1){
    counties.push(line[0]);
  }
}

for(let i = 0; i < counties.length; i++){
    countyTotal[counties[i]] = {"2017":{
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
    "2022":{
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
    }
  }
}

for(let i = 1; i < prec.length-1; i++){
  let county = prec[i].split(',');

  console.log(county);
  console.log("second value = " + county[2])
  console.log("i = " + i);


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

console.log(countyTotal);
console.log(JSON.stringify(countyTotal))


fs.writeFileSync('countyCrime.json', JSON.stringify(countyTotal), 'utf8');
