const server = require('./../server.js')

module.exports = () => new Promise((resolve, reject) =>
  {
    if (process.env.CONTRAST) {
      console.log('Contrast is enabled so skipping server.start');
      resolve();
    } else {
      server.start(err => {
        if (err) {
          reject(err)
        }
        resolve()
      })
    }
  }
);