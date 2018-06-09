const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
    ],
    files: [
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/moment/moment.js',
      'www/lib/moment-timezone/builds/moment-timezone-with-data.js',
      'www/lib/suncalc/suncalc.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/js/**/*.js',
      'www/views/**/*.js',
      'test/*.js'
    ],
    reporters: ['progress'],
    browsers: ['HeadlessChrome'],
    customLaunchers:{
        HeadlessChrome:{
            base: 'Chrome',
            flags: [
              '--no-sandbox',
              ' --enable-gpu '
              ]
        }
    }
  });
};
