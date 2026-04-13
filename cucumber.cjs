module.exports = {
  default: {
    require: ['step-definitions/*.ts'],
    format: ['progress', 'html:reports/cucumber-report.html', 'json:reports/cucumber-report.json'],
    requireModule: ['ts-node/register'],
    parallel: 1
  }
};