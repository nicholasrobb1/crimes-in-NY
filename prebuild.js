  const fs = require('fs');

  fs.rmSync('public', { recursive: true, force: true });
  fs.mkdirSync('public');
  fs.copyFileSync('./src/styles.css', './public/styles.css');
