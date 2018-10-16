module.exports = {
  verbose: true,
  bail: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testURL: 'http://localhost',
}
