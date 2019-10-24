const { strictEqual } = require('assert')
const { TestDirector } = require('test-director')
const { classNameProp } = require('.')

const testDirector = new TestDirector()

testDirector.add('`classNameProp` with various args.', () => {
  strictEqual(classNameProp(), undefined)
  strictEqual(classNameProp(undefined), undefined)
  strictEqual(classNameProp(null), undefined)
  strictEqual(classNameProp(''), undefined)
  strictEqual(classNameProp(true), undefined)
  strictEqual(classNameProp(undefined, null, '', true), undefined)
  strictEqual(classNameProp('a'), 'a')
  strictEqual(classNameProp('a', 'b', 'c'), 'a b c')
  strictEqual(classNameProp('a', undefined, 'c'), 'a c')
})

testDirector.run()
