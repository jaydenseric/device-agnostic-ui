import { deepStrictEqual } from 'assert';
import splitWordBreaks from '../../../public/utils/splitWordBreaks.js';

export default (tests) => {
  tests.add('`splitWordBreaks` with various arguments.', () => {
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
};
