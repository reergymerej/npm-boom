# npm-boom

Generate boilerplate for es6 npm modules.

[![npm-boom demo](https://img.youtube.com/vi/ZOe2RMjep3o/0.jpg)](https://www.youtube.com/watch?v=ZOe2RMjep3o)

## installation

```sh
yarn global add npm-boom

# or if you prefer
npm i -g npm-boom
```

## usage

```sh
# create scaffolding
npm-boom projectname

# install npm dependencies
cd projectname && yarn

# you're done!
```

### structure

* src/ - es6
* lib/ - transpiled es5

### features

* eslint setup
* babel setup
* basic npm and git ignore files
* Jest test setup (supports es6)
* React ready

### package scripts

* **start*
* **lint**
* **test**
* **build
