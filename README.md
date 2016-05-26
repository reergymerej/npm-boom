# npm-boom <small>v1.2.3</small>

Generate boilerplate for es6 npm modules.

[![npm-boom demo](https://img.youtube.com/vi/ZOe2RMjep3o/0.jpg)](https://www.youtube.com/watch?v=ZOe2RMjep3o)

## installation

```sh
npm i -g npm-boom
```

## usage

```sh
# create scaffolding
npm-boom projectname

# install npm dependencies
cd projectname && npm i

# you're done!
```

### structure

* src/ - es6
* test/ - tests run by Mocha (es6)
* lib/ - transpiled es5

### features

* eslint setup
* babel setup
* basic npm and git ignore files
* Mocha test setup (supports es6)

### npm scripts

* **lint** - runs eslint on `./src` and `./test`
* **test** - runs tests in `./test` with Mocha
* **build** - transpiles `./src` to `./lib`
* **prepublish** - automatically runs when publishing to npm, runs `build` for you
