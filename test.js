'use strict';

const { deepStrictEqual } = require('assert');
const { TestDirector } = require('test-director');
const splitWordBreaks = require('./public/utils/splitWordBreaks');

const tests = new TestDirector();

tests.add('`splitWordBreaks`', () => {
  deepStrictEqual(splitWordBreaks('learnHTML5WithUs'), [
    'learn',
    'HTML',
    '5',
    'With',
    'Us',
  ]);

  deepStrictEqual(splitWordBreaks('learn HTML 5 With Us'), [
    'learn HTML 5 With Us',
  ]);

  deepStrictEqual(splitWordBreaks('Foo <wbr /> barBaz', '_'), [
    'Foo <wbr /> bar',
    'Baz',
  ]);
});

tests.run();
