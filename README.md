# npm-boom

Generate boilerplate for npm modules. (eslint, es6, mocha)

## installation

```sh
npm i -g npm-boom
```

## usage

Create your `foo` project.

```sh
npm-boom foo
```

### structure

* lib/ - transpiled es5
* src/ - es6
* test/ - tests run by Mocha (es6)

### features

* standard eslint setup
* standard babel setup
* standard eslint, npm, and git ignore files

### npm scripts

* **lint** - runs eslint on `./src` and `./test`
* **test** - runs tests in `./test` with Mocha
* **build** - transpiles `./src` to `./lib`
* **prepublish** - automatically runs when publishing to build `./lib`
