import { deepStrictEqual, strictEqual } from 'assert';
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import disposableDirectory from 'disposable-directory';
import gzipSize from 'gzip-size';
import TestDirector from 'test-director';
import webpack from 'webpack';
import splitWordBreaks from './public/utils/splitWordBreaks.js';

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
      context: fileURLToPath(new URL('./', import.meta.url)),
      entry: './public/index.js',
      output: {
        path: tempDirPath,
        filename,
        libraryTarget: 'commonjs2',
      },
      target: 'node',
      mode: 'production',
      externals:
        /^(?:next|object-assign|prop-types|react|react-dom)(?:\/|\\|$)/u,
    });
    const compile = promisify(compiler.run).bind(compiler);
    const stats = await compile();

    if (stats.hasWarnings() || stats.hasErrors())
      throw new Error(stats.toString('errors-warnings'));

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
