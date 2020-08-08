# CV Takuya Kitazawa

Source: [lucas-clemente/cv](https://github.com/lucas-clemente/cv)

## Installation

Ensure using node v10 since newer versions cause errors in node-sass:

```sh
brew uninstall node
brew install nodebrew
nodebrew setup
nodebrew ls-remote
nodebrew install-binary v10.22.0
nodebrew use v10.22.0
```

CLI tools:

```sh
npm install -g broccoli-cli bower phantomjs
```

Install modules:

```sh
npm-check-updates -u
npm install
bower install
```

## Build

```sh
./toPDF.sh
broccoli build dist
```

## License 

[MIT](LICENSE.txt)
