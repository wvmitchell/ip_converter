# IP Diff

## Description

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

## Examples

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

## Using the tests

Some example tests have already been created for you. You only need make them
pass. You can get started by running the following commands:

1) Clone the repo: `git clone git@github.com:wvmitchell/ip_diff.git`
2) Move in and install dependencies: `cd ip_diff && npm i`
3) Run the tests: `npm test`
4) Alternatively, run the tests in watch mode: `npm run test:watch`
5) Make the first test pass, then move on to the first skipped test

## Important notes
1) Other than unskipping tests, you do not need to alter the test file.

## Submitting your solution
* Open up a pull request to this repo using a forked copy of the repo to your
  own Github account. Once you've done that, drop a message in the #frontend
  channel linking us to your PR.
