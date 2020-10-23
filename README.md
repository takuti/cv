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

```sh
export PATH=$HOME/.nodebrew/current/bin:$PATH
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
broccoli build dist 
./toPDF.sh 
broccoli serve  # confirm at http://localhost:4200/
```

## License 

[MIT](LICENSE.txt)
