const unexpected = require('unexpected')
const unexpectedJestSnapshot = require('../src')

const expect = unexpected.clone()
  .use(unexpectedJestSnapshot)

describe('unexpected-jest-snapshot', () => {
  describe('snapshots', () => {
    it('creates a snapshot', () => {
      return expect('foo', 'to match snapshot')
        .then(() => {
          expect(
            () => expect('bar', 'to match snapshot'),
            'to throw'
          )
        })
    })
  })
})