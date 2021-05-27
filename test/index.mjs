import TestDirector from 'test-director';
import test_bundle from './bundle.test.mjs';
import test_splitWordBreaks from './public/utils/splitWordBreaks.test.mjs';

const tests = new TestDirector();

test_splitWordBreaks(tests);
test_bundle(tests);

tests.run();
