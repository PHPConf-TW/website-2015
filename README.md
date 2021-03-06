# PHPConf Website 2015

[![Build Status](https://travis-ci.org/PHPConf-TW/website-2015.svg)](https://travis-ci.org/PHPConf-TW/website-2015) [![Coverage Status](https://coveralls.io/repos/PHPConf-TW/website-2015/badge.svg?branch=master&service=github)](https://coveralls.io/github/PHPConf-TW/website-2015?branch=master)

Source Code for PHPConf Taiwan 2015.

## Usage

```
$ npm install -g babel
$ npm install
$ npm start
```

Browse http://localhost:3000

Or you can define other port.

```
$ PORT=3005 npm start
```

Browse http://localhost:3005

## Deploy

Before deploying to Github `gh-pages` branch, you can use the following example commands to generate static files.

```
$ NODE_ENV=production npm run build
$ npm run deploy
```

## Style Guide

Please refer the following JavaScript Style Guide.

* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Airbnb JavaScript Style Guide ES2015](https://github.com/airbnb/javascript)

