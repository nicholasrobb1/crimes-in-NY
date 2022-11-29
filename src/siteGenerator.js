const fs = require('fs');
const ejs = require('ejs');

let county_info = JSON.parse(fs.readFileSync('../data/countyCrime.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let county_template = fs.readFileSync('views/character.ejs', 'utf8');
let header_template = fs.readFileSync('views/global/header.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
  let countyName = [];
  for (county in county_info){
    countyName.push(county);
  }
  // console.log(countyName)

  // let headerEJS = ejs.render(header_template, {
  //   data:countyName
  // })
  //
  // fs.writeFileSync('views/global/navbar.html', headerEJS, 'utf8');


for (county in county_info){
  console.log("render character template");
  let county_html = ejs.render(county_template, {
    filename: __dirname + '/views/character.ejs',
    stats: county_info[county],
    names: countyName,
    name: county
  });
  county_info[county].link = getBetterFileName(county);
  fs.writeFileSync('../public/'+county_info[county].link+'.html', county_html, 'utf8');

}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  names: countyName,
  data: county_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');

function getBetterFileName(countyName){
  let betterFileName = countyName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
