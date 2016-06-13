#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ncp } from 'ncp';
import rimraf from 'rimraf';
import replace from 'replace-in-file';

function getProjectName() {
  const invalid = /[^a-z0-9-]/gi;
  return process.argv[2].replace(invalid, '');
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
  die(`There was a problem creating ${destination}.`);
}

function addProjectName(destinationDir, projectName) {
  return new Promise((resolve, reject) => {
    const options = {
      files: [
        path.join(destinationDir, 'README.md'),
        path.join(destinationDir, 'package.json'),
      ],
      replace: '{{PROJECT_NAME}}',
      with: projectName,
    };

    replace(options, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    });
  });
}

function addMissingFile(destinationDir, filename, content) {
  const filePath = path.join(destinationDir, filename);
  fs.writeFileSync(filePath, content);
}

function addMissingFiles(destinationDir) {
  addMissingFile(destinationDir, '.npmignore', 'src/');
  addMissingFile(destinationDir, '.gitignore', 'lib/');
}

// copy
const content = path.join(__dirname, '../content');
ncp(content, destination, (err) => {
  if (err) {
    rimraf(destination, () => {
      die('There was an error creating the project.');
    });
  }

  addProjectName(destination, projectName).then(
    () => {
      addMissingFiles(destination);
      console.log(`"${projectName}" has been created.`);
    },
    (err) => {
      console.error(err);
      die('Something went wrong.  :(');
    }
  );
});
