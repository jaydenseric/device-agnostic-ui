'use strict';

const { deepStrictEqual, strictEqual } = require('assert');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const { disposableDirectory } = require('disposable-directory');
const gzipSize = require('gzip-size');
const { TestDirector } = require('test-director');
const webpack = require('webpack');
const splitWordBreaks = require('./public/utils/splitWordBreaks');

const tests = new TestDirector();

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

tests.add('Bundle.', async () => {
  await disposableDirectory(async (tempDirPath) => {
    const filename = 'bundle.cjs';
    const compiler = webpack({
      context: __dirname,
      entry: './public/index.js',
      output: {
        path: tempDirPath,
        filename,
        libraryTarget: 'commonjs2',
      },
      target: 'node',
      mode: 'production',
      externals: /^(?:next|object-assign|prop-types|react|react-dom)(?:\/|\\|$)/u,
    });
    const compile = promisify(compiler.run).bind(compiler);
    const stats = await compile();
    const message = stats.toString('errors-warnings');

    if (message) throw new Error(message);

    const bundleCode = await fs.promises.readFile(
      join(tempDirPath, filename),
      'utf8'
    );
    const kB = (await gzipSize(bundleCode)) / 1000;

    console.info(`${kB} kB minified and gzipped bundle.`);

    strictEqual(kB < 3, true);
  });
});

tests.run();
