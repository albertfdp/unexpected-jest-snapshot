const jestExpect = global.expect

module.exports = {
  name: 'unexpected-jest-snapshot',
  version: require('../package.json').version,
  installInto: function (expect) {
    expect.addAssertion('<any> to match snapshot', function (expect, subject) {
      jestExpect(subject).toMatchSnapshot()
    })
  }
}
