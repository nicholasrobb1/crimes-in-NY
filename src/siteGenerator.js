const fs = require('fs');
const ejs = require('ejs');

let county_info = JSON.parse(fs.readFileSync('../data/countyCrime.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let county_template = fs.readFileSync('views/character.ejs', 'utf8');
let header_template = fs.readFileSync('views/global/header.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');
/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
  let countyName = [];
  for (county in county_info){
    countyName.push(county);
    // countyName.push(getBetterFileName(county));
  }

  // console.log(countyName)
  stateAvg(county_info);
for (county in county_info){

  let county2 = county+"";
  let county_html = ejs.render(county_template, {
    filename: __dirname + '/views/character.ejs',
    stats: county_info[county],
    stateAvg: stateAvg(county_info),
    names: countyName,
    name: county2
  });
  county = county2;
  // console.log("county Post = " + county);
  // console.log(county_info[county]);
  county_info[county].link = getBetterFileName(county);
  // console.log(getBetterFileName(county));
  // console.log("filename = " + county_info[county].link);
  fs.writeFileSync('../public/'+county_info[county].link+'.html', county_html, 'utf8');

}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  names: countyName,
  stateAvg: stateAvg(county_info),
  data: county_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');

let about_html = ejs.render( about_template, {
  filename: __dirname+ '/views/about.ejs',
  names:countyName
})
  fs.writeFileSync('../public/about.html', about_html, 'utf8');

function getBetterFileName(countyName){
  let betterFileName = countyName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}


function stateAvg(countyData){
  let avg = {
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


  let count = 0;
  for(county in countyData){
    count++;
    let county2 = county;
    avg.indexTotal = parseInt(avg["indexTotal"]) + parseInt(countyData[county2]["indexTotal"]);
    avg.violentTotal = parseInt(avg["violentTotal"]) + parseInt(countyData[county2]["violentTotal"]);
    avg.murder = parseInt(avg["murder"]) + parseInt(totalInCategory(countyData, county2, "murder"));
    avg.rape = parseInt(avg["rape"]) + parseInt(totalInCategory(countyData, county2, "rape"));
    avg.robbery = parseInt(avg["robbery"]) + parseInt(totalInCategory(countyData, county2, "robbery"));
    avg.aggravatedAssault = parseInt(avg["aggravatedAssault"]) + parseInt(totalInCategory(countyData, county2, "aggravatedAssault"));
    avg.propertyTotal = parseInt(avg["propertyTotal"]) + parseInt(countyData[county2]["propertyTotal"]);
    avg.burglary = parseInt(avg["burglary"]) + parseInt(totalInCategory(countyData, county2, "burglary"));
    avg.larceny = parseInt(avg["larceny"]) + parseInt(totalInCategory(countyData, county2, "larceny"));
    avg.motorVehicleTheft = parseInt(avg["motorVehicleTheft"]) + parseInt(totalInCategory(countyData, county2, "motorVehicleTheft"));
  }
  for(category in avg){
    avg[category] = parseInt(avg[category]/count);
  }
  return avg
}//end stateAvg

function totalInCategory(countyData, county, category){
  let catTot = 0;
  for(let i = 2017; i < 2022; i++){
    catTot += parseInt(countyData[county][i][category]);
  }

  return catTot;
}
