import TestDirector from 'test-director';
import testBundle from './bundle.test.mjs';
import testSplitWordBreaks from './public/utils/splitWordBreaks.test.mjs';

const tests = new TestDirector();

testSplitWordBreaks(tests);
testBundle(tests);

tests.run();
