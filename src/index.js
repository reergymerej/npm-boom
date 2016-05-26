#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ncp } from 'ncp';
import rimraf from 'rimraf';



function getProjectName() {
  // TODO: strip . / \
  return process.argv[2];
}

function die(message) {
  console.log(message);
  process.exit(1);
}


// get name
const projectName = getProjectName();

if (!projectName) {
  die('What should we call the project?');
}


// create destination
const cwd = process.cwd();
const destination = path.join(cwd, projectName);
try {
  fs.mkdirSync(destination);
} catch (err) {
  // TODO: tailor based on err - already exists, permission issues
  die(`We cannot make ${destination}.`);
}


// copy
const content = path.join(__dirname, '../content');
ncp(content, destination, (err) => {
  if (err) {
    rimraf(destination, () => {
      die('There was an error creating the project.');
    });
  }

  // TODO: rewrite new files
  // TODO: tell user
});
