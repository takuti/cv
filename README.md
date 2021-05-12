# CV Takuya Kitazawa

Source: [lucas-clemente/cv](https://github.com/lucas-clemente/cv)

## Installation

Ensure using node v10 since newer versions cause errors in node-sass:

```sh
brew uninstall node
brew install nodenv # follow `nodenv init`
nodenv install 10.22.0
nodenv local 10.22.0
```
```

CLI tools:

```sh
npm install -g broccoli-cli bower phantomjs-prebuilt npm-check-updates
```

Install modules:

```sh
npm-check-updates -u
npm install
bower install
```

## Build

```sh
broccoli build dist 
./toPDF.sh 
broccoli serve  # confirm at http://localhost:4200/
```

## License 

[MIT](LICENSE.txt)
