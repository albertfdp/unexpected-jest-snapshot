const unexpected = require('unexpected')
const unexpectedJestSnapshot = require('../src')

const React = require('react')
const TestRenderer = require('react-test-renderer')

const expect = unexpected.clone()
  .use(unexpectedJestSnapshot)

const Component = function (props) {
  return React.createElement('div', null, `Name: ${props.name}`)
}

describe('unexpected-jest-snapshot', function () {
  describe('snapshots', function () {
    it('creates a snapshot', function () {
      expect('foo', 'to match snapshot')
    })
  })

  describe('with react-test-renderer', function () {
    it('creates a snapshot of the rendered component', function () {
      const tree = TestRenderer.create(
        React.createElement(Component, { name: 'foo' })
      ).toJSON()

      expect(
        tree,
        'to match snapshot'
      )
    })
  })
})
