const unexpected = require('unexpected')
const unexpectedJestSnapshot = require('../src')

const React = require('react')
const TestRenderer = require('react-test-renderer')

const expect = unexpected.clone()
  .use(unexpectedJestSnapshot)

const Component = ({ name }) => (
  React.createElement('div', null, `Name: ${name}`)
)

describe('unexpected-jest-snapshot', () => {
  describe('snapshots', () => {
    it('creates a snapshot', () => {
      expect('foo', 'to match snapshot')
    })
  })

  describe('with react-test-renderer', () => {
    it('creates a snapshot of the rendered component', () => {
      expect(
        React.createElement(Component, { name: 'foo' }),
        'to match snapshot'
      )
    })
  })
})