  const fs = require('fs');

  fs.rmSync('public', { recursive: true, force: true });
  fs.mkdirSync('public');
  fs.copyFileSync('./src/styles.css', './public/styles.css');
  fs.copyFileSync('./src/views/about.html', './public/about.html');
  // fs.renameSync('./src/views/wireframe', './public/wireframe');
  fs.mkdirSync('public/wireframe');

  let pics = fs.readdirSync('./src/views/wireframe');
  pics.forEach(function(pic){
    fs.copyFileSync(`./src/views/wireframe/${pic}`, './public/wireframe/'+pic)
  });

    // console.log(fs.readdirSync('./src/views/wireframe'));
