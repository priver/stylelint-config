# @priver/stylelint-config

Shareable config for [stylelint]. Uses rules from [`stylelint-order`].

[![build status](https://img.shields.io/travis/priver/stylelint-config/master.svg?style=flat-square)](https://travis-ci.org
/priver/stylelint-config)
[![npm version](https://img.shields.io/npm/v/@priver/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/package
/@priver/stylelint-config)
[![npm downloads](https://img.shields.io/npm/dm/@priver/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/pack
age/@priver/stylelint-config)
[![license](https://img.shields.io/github/license/priver/stylelint-config.svg?style=flat-square)](https://github.com/priver
/stylelint-config/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn info @priver/stylelint-config peerDependencies
# or
npm info @priver/stylelint-config peerDependencies
```

Then install install this package:

```bash
yarn add @priver/stylelint-config --dev
# or
npm install @priver/stylelint-config --save-dev
```

## Usage

Add the following in your `.stylelintrc`:

```json
{
    "extends": "@priver/stylelint-config"
}
```

[stylelint]: https://stylelint.io/
[`stylelint-order`]: https://github.com/hudochenkov/stylelint-order
