#!/usr/bin/env node

const { promises } = require('fs');
const path = require('path');
const chalk = require('chalk');

const NEXT_PATH = path.join(process.cwd(), '.next', 'serverless', 'pages');

function clearCompressedPages() {
  return new Promise(resolve => {
    console.log(chalk.red('Cleaning compressed pages'));
    promises.readdir(NEXT_PATH).then(async files => {
      for (const file of files) {
        if (file.includes('.gz')) {
          console.log(`- ${chalk.red.bold(file)}`);
          await promises.unlink(path.join(NEXT_PATH, file));
        }
      }

      resolve();
    });
  });
}

clearCompressedPages().then(() => {
  process.exit(0);
});
