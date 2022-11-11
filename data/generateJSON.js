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
      "Agency":"",
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
      "Agency":"",
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
      "Agency":"",
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
      "Agency":"",
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
      "Agency":"",
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
      "Agency":"",
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

for(let i = 0; i < prec.length; i++){
  let county = prec[i].split(',');

  let year = countyTotal[county[0]].county[crimeDict["year"]];

  year.Agency += county[crimeDict["Agency"]];
  year.indexTotal += county[crimeDict["indexTotal"]];
  year.violentTotal += county[crimeDict["violentTotal"]];
  year.murder += county[crimeDict["murder"]];
  year.rape += county[crimeDict["rape"]];
  year.robbery += county[crimeDict["robbery"]];
  year.aggravatedAssault += county[crimeDict["aggravatedAssault"]];
  year.propertyTotal += county[crimeDict["propertyTotal"]];
  year.burglary += county[crimeDict["burglary"]];
  year.larceny += county[crimeDict["larceny"]];
  year.motorVehicleTheft += county[crimeDict["motorVehicleTheft"]];


  countyTotal[county[0]].county[crimeDict["year"]] = year;

}
fs.writeFileSync('countyCrime.json', JSON.stringify(countyTotal), 'utf8');

// let characters = {};
//
// let peeps_csv = fs.readFileSync('Characters.csv', 'utf8');
//
// let peeps = peeps_csv.split("\n");
//
// peeps.forEach(function(peep) {
//   let character_info = peep.split(';');
//
//   let character_name = character_info[1];
//
//   if(character_name!="Name"){
//     let characterStats = {};
//     characterStats['gender'] = character_info[2];
//     characterStats['house'] = character_info[4];
//     characterStats['species'] = character_info[7];
//     if (character_info[12])
//       characterStats['skills'] = character_info[12].split('|');
//     else {
//       characterStats['skills'] = [];
//     }
//
//     characters[character_name]=characterStats;
//   }
// });
//
// fs.writeFileSync('potter.json', JSON.stringify(characters), 'utf8');
